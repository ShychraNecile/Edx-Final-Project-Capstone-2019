//entry point for node.js
// IMPORTS
// instructing server to listen to requests

const express = require("express");
const app = express();
//var port = 3000;
const bodyParser = require("body-parser");

// mounts BodyParser as middleware. Every request passes through it

app.use(express.static("public")); //using static html page

// ROUTES
app.get("/", function(req, res) {
  res.send("Get request received at '/'");
});

/*app.get("/medicationMockup", function(req, res) {
      console.log("Get a list of all side effects of medication as json");
      res.json(medicationMockup);
    }); // this returns a list of side effects as JSON
    */
app.get("/medicationMockup", function(req, res) {
  if (req.query.sideEffects) {
    res.send(
      "Returning a list of all the side effects: " + req.query.sideEffects
    );
  } else {
    res.json(medicationMockup);
  }
});

app.get("/medicationMockup/:id", function(req, res) {
  console.log("Return side effect with the ID: " + req.params.id);
  res.send("Return side effect wiht the ID: " + req.params.id);
});

app.post("/medicationMockup", function(req, res) {
  console.log("Insert new side effect" + req.body.sideEffects);
  res.json(req.body);
});

app.listen(3000, function() {
  console.log("Express app listening on port 3000");
});
