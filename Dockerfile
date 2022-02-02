#******BUILD
#base image
FROM node:10 as build

#set workdir
WORKDIR /usr/src/app

#add /app/node_modules/.bin to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

#install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

#copy app
COPY ./ ./

#build prod code
RUN npm run build

#*****PRODUCTION
#copies from build env
FROM nginx:stable-alpine as prod
COPY --from=build usr/src/app/build /usr/share/nginx/html

#allows react router to be used with nginx
# COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]

# FROM node:10
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install
# COPY . .
# ENV APP_PORT 8080
# EXPOSE 8080
# CMD [ "node", "App.js" ]