#Log mongodb queries in real time

I wrote this because I wanted a live stream of mongodb queries.

##TO MAKE IT WORK READ THIS!


run in mongo shell on whatever db you need.
```
use dbName
db.setProfilingLevel(2)
```

##THEN YOU NEED TO EDIT THE CONNECTION URL IN INDEX.JS to be whatever you need.