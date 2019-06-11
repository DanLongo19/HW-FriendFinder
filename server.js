var express = require("express");
var app = express();
var path = require("path");

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("survey", function(request,response){
  response.sendFile(path.join(__dirname + "/survey"))
});

app.use(function(request, response){
  response.sendFile(path.join(__dirname + "/home"))
})


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("/Users/dan_longo/Desktop/Bootcamp/HW-FriendFinder/HW-FriendFinder/routing/apiRoutes.js")(app);
require("/Users/dan_longo/Desktop/Bootcamp/HW-FriendFinder/HW-FriendFinder/routing/htmlRoutes.js")(app);



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
