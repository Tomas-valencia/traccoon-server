var mongoose=require('mongoose');
var Activity = require('../models/activities');

// Find all activities
exports.listAllActivities = function(req, res) {
    Activity.find({}, function(err, activity) {
        if (err)
            res.send(err);
        res.json(activity);
    });
};

// Read a sactivity
exports.readActivity = function(req, res) {
    Activity.findById(req, function(err, task) {
        if (err)
            res.send(err);
        res.json(activity);
        });
};

// Insert activity
exports.insertActivity = function(newActivityJson) {
    var newActivity = new Activity(newActivityJson);
    newActivity.save();
};

// Update a activity
exports.updateActivity = async function(activityJson) {
    var myQuery = await Activity.findOne({ name : activityJson.name });
    if (myQuery != undefined)
    {
        myQuery.set(activityJson);
        myQuery.lastUpdate = Date.now();
        await myQuery.save();
    }
    else
    {
        exports.insertActivity(activityJson);
    }
};

// Delete activity
exports.deleteActivity = function(req, res) {
    Activity.remove({
        _id: req.params.activityId
    }, function(err, activity) {
        if (err)
            res.send(err)
            res.json({ message: 'Activity successfully deleted' });
    });
};