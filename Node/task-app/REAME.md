#task app

- initialize npm package json file
  cmd: npm init
- install necessary packages for a start
  packages: express morgan cors colors
- write server script in server.js and setup an express server

- start app cmds:
  prod: npm start
  dev: npm run dev

- set up middlewares using app.use()
- test the endpoint on postman
- create mongodb atlas db account
- connect app to db using mongoose connection
- setup app schema
  - our task app: major player and relationships
    USERS, TASK,
    user fields: id, role (admin, default,supervisor), firsName, lastName, phoneNumber, userCode
    task fields: id userId(reference to user model - one => many), title, desc, status
