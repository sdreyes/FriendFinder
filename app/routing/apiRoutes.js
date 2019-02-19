var friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        console.log(req.body);
        friendDifferences = [];
        friendCompatibilities = [];
        function difference(friendScore, userScores) {
            return Math.abs(friendScore-userScore);
        };
        function addArr(accumulator, a) {
            return accumulator + a;
        }

        for (i=0; i < friends.length; i++) {
            for (j=0; j < 10; j++) {
                var friendScore = parseInt(friends[i].scores[j]);
                var userScore = parseInt(req.body.scores[j]);
                friendDifferences.push(difference(friendScore, userScore));
            };
            friendCompatibilities.push(friendDifferences.reduce(addArr));
        };
        var bestScore = Math.min.apply(null, friendCompatibilities);
        var bestFriendIndex = friendCompatibilities.indexOf(bestScore);
        var bestFriend = friends[bestFriendIndex];
        friends.push(req.body);
    });
};