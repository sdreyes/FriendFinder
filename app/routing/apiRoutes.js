var friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        if (req.body.name && req.body.scores.length === 10 && req.body.photo) {
            friends.push(req.body);
            res.json(true);
        }
        else {
            res.json(false);
        }
    });
};