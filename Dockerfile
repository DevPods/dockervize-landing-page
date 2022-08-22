FROM node:latest
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
RUN npm rebuild node-sass
EXPOSE 3000
CMD ["npm", "run", "dev"]

#docker build -t dockervize/container .
#docker run -it -p 8081:8080 --name dockervize-container dockervize/container