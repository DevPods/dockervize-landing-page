echo "Processing deploy.sh"
# Set EB BUCKET as env variable
EB_BUCKET=elasticbeanstalk-us-east-1-114736952595
# Set the default region for aws cli
aws configure set default.region us-east-1
# Log in to ECR
eval $(aws ecr get-login --no-include-email --region us-east-1)
# Build docker image based on our production Dockerfile
docker build -t dockervize/dev .
# tag the image with the Travis-CI SHA
docker tag dockervize/dev:latest 114736952595.dkr.ecr.us-east-1.amazonaws.com/dockervize-official:$TRAVIS_COMMIT
# Push built image to ECS
docker push 114736952595.dkr.ecr.us-east-1.amazonaws.com/dockervize-official:$TRAVIS_COMMIT
# Use the linux sed command to replace the text '<VERSION>' in our Dockerrun file with the Travis-CI SHA key
sed -i='' "s/<VERSION>/$TRAVIS_COMMIT/" Dockerrun.aws.json
# Zip up our codebase, along with modified Dockerrun and our .ebextensions directory
zip -r dockerdeploy.zip Dockerrun.aws.json .ebextensions
# Upload zip file to s3 bucket
aws s3 cp dockerdeploy.zip s3://$EB_BUCKET/dockerdeploy.zip
# Create a new application version with new Dockerrun
aws elasticbeanstalk create-application-version --application-name dockervize-official --version-label $TRAVIS_COMMIT --source-bundle S3Bucket=$EB_BUCKET,S3Key=dockerdeploy.zip
# Update environment to use new version number
aws elasticbeanstalk update-environment --environment-name Dockervizeofficial-env --version-label $TRAVIS_COMMIT