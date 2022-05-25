FROM node:16-alpine

WORKDIR /user/src/app
COPY package*.json ./
RUN yarn

COPY src ./src
EXPOSE 5000

CMD ["yarn", "dev2"]