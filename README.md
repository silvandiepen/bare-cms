# Bare

A Bare CMS. What more do you need than a "key=>value" store and an asset manager?

### Install & Run

- Install and run (MongoDB)[#mongodb]
- Run `npm init` to install both the api and the app
- Run `npm start` to start the API service and the app

#### Install & Run MongoDB

- Check if you have MongoDB installed; `mongo --version`
- If not; (Download and Install)[https://docs.mongodb.com/manual/installation/]
- Create the database `sudo mkdir -p /data/db`
- Make sure it's writable
  `` sudo chown -R `id -u` /data/db ``
- Run `mongod` to start the DB
