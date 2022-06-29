# URL Shortener API

A GraphQL based URL shortener API made with typescript and express

## Features

* GraphQL
* Typescript and express
* Prisma


## Run it

* Clone repository
* Install dependencies `npm install` or `yarn install`
* Provide a postgresql database url for prisma with env file (DATABASE_URL).
* Run `npx prisma migrate dev`. It will migrate database and run seed.ts
* Run `npm run dev` for running project


## Note about subscriptions

I've used [graphql-ws](https://github.com/enisdenjo/graphql-ws) package for subscriptions. To test it on apollo explorer: in Explorer Settings, click "Edit" for "Connection Settings" and select graphql-ws under "Implementation".

Also, you may want to replace pubsub with redis. Because pubsub is just for development purposes only.

