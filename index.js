//Edit this url to point to your mongo db!
var mongoUrl = 'mongodb://localhost:27017/test';



var MongoClient = require("mongodb").MongoClient;
var async = require('asyncawait/async');
var await = require('asyncawait/await');


async(function () {
    try {
        console.log("using connection URL: " + mongoUrl);
        console.log("If this is wrong, change it in index.js.  If your not seeing anything probaly need to change it")
        var dbCon = await(MongoClient.connect(mongoUrl));
        process.on('SIGINT', function () { //Should I do this ?
            dbCon.close();
            console.log('Closed Database Connection');
            process.exit();
        })
        var Profile = dbCon.collection('system.profile');
        var items;
        var lastTime = new Date();
        while (true) {
            items = await(Profile.find({ ts: { $gte: lastTime }, junkField: { $ne: "SDLKJFJ" } }).toArray());
            lastTime = new Date();
            items.forEach((item) => {
                if (item.query && !item.query.junkField && item.ns != "meteor.cronHistory")
                    console.log(item.ns + "::\n" + "" + item.op + " ", JSON.stringify(item.query, null, "  ") + "\n");
            });
            await(pause());
        }
    } catch (e) {
        console.trace(e);
    }
    dbCon.close();
})();

function pause(time) {
    time = time || 1000;
    return new Promise((resolve) => {
        setTimeout(_ => resolve(), time);
    })
}
