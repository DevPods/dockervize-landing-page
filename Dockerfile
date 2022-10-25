FROM node:16
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
RUN npm rebuild node-sass
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "dev"]

#docker build -t dockervize/dev .
#docker run -it -p 8081:8080 --name dockervize-dev dockervize/dev

