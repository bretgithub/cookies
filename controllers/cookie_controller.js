let express = require("express");
let router = express.Router();
let cookies = require("../models/cookies");

router.get("/", function(req, res) {
  res.redirect("/cookies");
});

router.get("/cookies", function(req, res) {
  cookies.selectAll(function(data) {
    let hbsObject = {
      cookies: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/cookies", function(req, res) {
  console.log("controller " + req.body.cookie_flavor);

  cookies.insertCookie(req.body.cookie_flavor, function(result) {
    res.send(result);
  });
});

router.put("/api/cookies/:id", function(req, res) {
  if (req.body.crumbled === "true") {
    cookies.eatCookie(req.params.id, function(result) {
      res.send(result);
    });
    if (req.body.crumbled === "false") {
      console.log(req);
      cookies.eatCookie(req.params.id, function(result) {
        console.log(result);
        res.send(result);
      });
    }
  }
});

router.delete("/api/cookies/:id", function(req, res) {
  cookies.deleteCookie(req.params.id, function(result) {
    res.send(result);
  });
});

module.exports = router;
