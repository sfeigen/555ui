const request = require("request");

const defaultRoute = app => {
  app.get("/api/route", function(req, res) {
    res.send("Api Route Hit.");
  });
};
module.exports = defaultRoute;
