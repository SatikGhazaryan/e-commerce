Shop

Table of contents
*General info
*Technologies
*Setup

General info

This is shop with CRUD operations simple logic. It provides REST APIs. Before using it, please ensure that you've already installed the following programs
*Git as version control,
*Node.js as server program,
*MongoDb as database program.
If you haven't, these are their links for installing.

Technologies
Program/lib | version | command for checking
Git | 2.36.0 | git --version
Node.js | v16.13.2 | node -v
Express | ^4.18.1 | see in app package.json
MongoDB | v4.4.5 | mongo --version
Mongoose | ^6.4.4 | see in this app package.json
Eslint | 8.20.0 | see in this app package.json

Setup
Clone this repository
git clone https://github.com/SatikGhazaryan/e-commerce.git
Fill in your git credentials (if required)
Enter the downloaded directory.
cd node-server-template
Create your .env files like .env file in envs directory.
for npm

install packages
npm i
run server
npm run start or
npm start
if you want your server stay always running
npm run nodemon
