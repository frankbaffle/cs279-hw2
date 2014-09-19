Install:

npm install -g grunt-cli
npm install -g bower
npm install

Run:

node app.js

Details:

Mongo
 - db = cs279_hw2
 - collections
   - logs
   - surveys
   - nasas

TODO:

- Preload images
+ Database hookup
- CSV export


- Logs
  + Add group (interface order)
  + Required tab switch (already have # tab switches)
  + Timestamp
  + Name of command
  + Interface
  + Identifier

- Survey/Nasa
  - No default on survey (required fields + submit).
  - Log nasa, survey.

+ Parametrize group

Questions to post:
+ Next after each trial?
+ Require toggling CM?

Note for Experiment:
to start the program in group1 mode, use http://localhost:8000/?group=1
to start the program in group0 mode, use http://localhost:8000/?group=0
