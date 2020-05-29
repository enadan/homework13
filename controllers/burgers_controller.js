var express = require("express");

var router = express.Router();

var burger = require("../models/burger");


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/burgers", function(req, res) {
    burger.create(req.body.name, function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {

    var bool = (req.body.devoured) ? 1 : 0;
  
    burger.update(req.params.id, bool,
      function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();  
      }
    );
  });
  
  // Export routes for server.js to use.
  module.exports = router;
  