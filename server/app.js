var createError = require('http-errors');
var https = require('https');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var Router = require('./routes/index');
var RouterActivities = require('./routes/activitiesRoute');
var RouterUsers = require('./routes/users')
var RouterRestaurants = require('./routes/restaurants')

//var task = require('./tasks/listener_task');

// FUNCTION TO LAUNCH EXPRESS APPLICATION
function launchExpressApplication() {

  var app = express();
  app.use(cors());
  app.use(logger('dev'));
  //app.set('view engine', 'pug');
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  //app.use(cookieParser());
  app.use(express.static(path.resolve(__dirname, 'public')));

  app.use(Router);
  app.use(RouterActivities);
  app.use(RouterUsers);
  app.use(RouterRestaurants);

  //var task = require('./tasks/task');

  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

  app.listen(node_options.port, function() {

  })

}



// FUNCTION TO LAUNCH MONGODB CONNECTION
function launchMongoDbConnection(next) {
  var mongoose_options = {
    keepAlive: true,
    useNewUrlParser: true
  }

  mongoose.connect('mongodb://localhost/Traccoon', mongoose_options).then(() => {

    mongoose.Promise = global.Promise;
    if (next != undefined && next.length > 0) {
      for (var i = 0; i < next.length; i++) {
        next[i]();
      }
    }
  })
    .catch(err => {
      // mongoose connection error will be handled here
      //console.error('App starting error:', err.stack);
      console.error('App starting error:', 'unable to connect to MongoDB');
      console.log(err);
    });
}
// PROCESSING LAUNCHER ARGUMENTS
const node_options = {
  'port': 3000
}

function processLauncherArguments() {
  if (process.argv.length > 2) {
    for (var i = 2; i < process.argv.length; i++) {
      var toAnalyze = process.argv[i].toLowerCase();
      if (toAnalyze.startsWith('--port=')) {
        var potentialPort = toAnalyze.substring(7);
        if (!isNaN(potentialPort)) {
          node_options.port = potentialPort;
        }
        else {
          throw new Error('Process Argument --port must be a number');
        }
      }
    }
  }
}

function launchServer() {
  var nextAfterDbConnection = [];
  nextAfterDbConnection.push(launchExpressApplication)


  launchMongoDbConnection(nextAfterDbConnection);
}

processLauncherArguments();
launchServer();
