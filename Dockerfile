FROM node:latest
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
# RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "dev"]

#docker build -t dockervize/container .
#docker run -p 3000:3000 dockervize/container