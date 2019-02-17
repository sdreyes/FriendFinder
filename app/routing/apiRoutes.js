var friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/tables", function(req, res) {
        if (req.body.name && req.body.scores === 10) {
            friends.push(req.body);
            res.json(true);
        }
        else {
            res.json(false);
        }
    });
};