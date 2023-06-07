FROM node:16
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build
EXPOSE 3001
CMD [ "yarn" , "start:dev" ]