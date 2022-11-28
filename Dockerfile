# docker build -t with_ignore -f Dockerfile . 
# docker run --rm with_ignore git

#FROM node:16.15.1 as base
FROM node:18.2.0 as base
ENV NODE_ENV=development
COPY package*.json ./
WORKDIR /src
RUN npm install --force
RUN npm install -g serve
EXPOSE 3000 80 443 8080 8443

#CMD [ "npm", "start"]
#CMD [ "npm", "run", "build"]
#CMD [ "serve", "-s", "build"]
CMD [ "npx", "serve", "-s", "build"]

#RUN #npm rebuild


# RUN npm uninstall bcrypt
# RUN npm install bcryptjs --save
# RUN rm -rf node_modules/
# RUN npm install node-gyp
# RUN npm install bcrypt 
# RUN npm install bcrypt