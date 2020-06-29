// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
var friendsData = require("../data/friends.js");
// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------
  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });
  app.post("/api/friends", function (req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    var newFriendScores = req.body.scores;
    var scoresArray = [];
    var friendCount = 0;
    var bestMatch = 0;
    for (let i = 0; i < friendsData.length; i++) {
      var scoresDiff = 0;
      //run through scores to compare friends
      for (var j = 0; j < newFriendScores.length; j++) {
        scoresDiff += Math.abs(
          parseInt(friendsData[i].scores[j]) - parseInt(newFriendScores[j])
        );
      }
      //push results into scoresArray
      scoresArray.push(scoresDiff);
    }
    //after all friends are compared, find best match
    for (var i = 0; i < scoresArray.length; i++) {
      if (scoresArray[i] <= scoresArray[bestMatch]) {
        bestMatch = i;
      }
    }
    //return bestMatch data
    var bff = friendsData[bestMatch];
    res.json(bff);
    //pushes new submission into the friendsdata array
    friendsData.push(req.body);
  });
};

// res.json({ ok: true });
