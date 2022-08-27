FROM node:16.15-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . ./
RUN npm run build

# stage 2 - build the final image and copy the react build files
#FROM nginx:1.17.8-alpine
#COPY --from=build /app/build /usr/share/nginx/html
#RUN rm /etc/nginx/conf.d/default.conf
#COPY nginx/nginx.conf /etc/nginx/conf.d
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]

# production env
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]