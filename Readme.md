#Log mongodb queries in real time

I wrote this because I wanted a live stream of mongodb queries.

##TO MAKE IT WORK READ THIS!

First you need to tell mongo to log all your queries.
To do this, open up a mongo shell, and run the following commands
```
use dbName
db.setProfilingLevel(2)
```

Also, of course you need to install dependencies.  I used yarn for this (improved npm), but npm should work.

```
//if you have yarn
yarn
//if you still use npm, I think this will work
npm install
```

##THEN YOU NEED TO EDIT THE CONNECTION URL IN INDEX.JS to be whatever you need.

To run, just cd into the directory and do

```
node index.js
```

I just whipped this up pretty quickly so there may be bugs.  Please let me know (by the way, I this does not work with node 7 on windows as of right now)