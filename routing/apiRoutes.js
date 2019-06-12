// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("HW-FriendFinder/app/data/friends.js");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(request, response) {
    response.json(friends);
  });

  app.post("/api/friends", function(request, response) {
    let bestMatch = {
      name: "",
      photo: "",
      friendMeter: 1000
    };
    console.log(request.body);

    let userInput = request.body;
    let userScore = userInput.score;
    console.log(userScore);

    let difference = o;
    for (var i = 0; i < friends.length; i++) {
      console.log(friends[i]);
      difference = 0;
      for (var x = 0; j < friends[i].score[x]; x++){
        difference += Math.abs(parseInt(userScore[x]) - parseInt(friends[i].score));
        if (difference <= bestMatch.friendMeter){
          bestMatch.name = friends[i].name;
          bestMatch.photo = friends[i].photo;
          bestMatch.friendMeter = difference;
        }
      }
    }
    friends.push(userInput);
    response.json(bestMatch);
  });

  app.post("/api/clear", function(request, res) {
    // Empty out the arrays of data
    tableData.length = 0;
    waitListData.length = 0;

    response.json({ ok: true });
  });
};