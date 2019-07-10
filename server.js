var express = require("express");
var app = express();
var path = require("path");

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get("/survey", function(request,response){
//   response.sendFile(path.join(__dirname + "/survey.html"))
// });

// app.use(function(request, response){
//   response.sendFile(path.join(__dirname + "/home.html"))
// })


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
