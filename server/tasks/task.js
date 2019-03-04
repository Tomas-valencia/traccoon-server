var cron = require('node-cron');
var request = require('request')
var rp = require('request-promise');

var serverController = require('./../controllers/serverController');

var activities = [
    {
        
    }
]


var ListeningTask = module.exports = {

    launchAsyncTasks: function () { 
        // Schedule tasks to be run on the server
        cron.schedule("* * * * *", async function () {
          for (var i = 0 ; i < activities.length ; i++)
          {
            module.exports.compute(servers[i])
          }
        });
      },

      compute: function(activities) {
        var host = server.host;
            var url = host + "/" + server.url;
            var name = activities.name
    
            var response = request(url, { json: true }, (err, res, body) => {
              var infoBody = body;
    
              if (err) {
                //return console.log(err) 
                if (err.code === 'ECONNREFUSED') {
                  console.log(err)
                  var body = {
                      err,
                  }
                }
              }
              else {
                console.log(name)
                body.name = name;
              }
            }) 
      },
}