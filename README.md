Install:

npm install -g grunt-cli
npm install -g bower
npm install

Run:

node app.js

Details:

Mongo:

 - db (for lab) = cs279_hw2
 - db (for testing) = cs279_hw2_test
 - db (for online) = cs279_hw2_online
 - collections
   - logs
   - surveys
   - nasas

TODOs:

- Preload images
- Convert true/false to 0/1 for tabSwitch field

Note for Experiment:
to start the program in group1 mode, use http://localhost:8000/?group=1
to start the program in group0 mode, use http://localhost:8000/?group=0
to reset a session, use http://localhost:8000/?reset=1
to debug, use http://localhost:8000/?debug=1