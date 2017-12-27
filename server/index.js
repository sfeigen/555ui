const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

const build = path.resolve(__dirname, "../react-ui/build");
const index = path.resolve(__dirname, "../react-ui/build", "index.html");

const defaultRoute = require("./routes/defaultRoute");
const data = require("./data");
const jsonData = JSON.stringify(data);

app.use(express.static(build));

//GENERIC API
app.get("/api", function(req, res) {
  res.set("Content-Type", "application/json");
  res.send(`{"message": ${jsonData}}`);
});

//ROUTES
defaultRoute(app);

app.get("*", function(req, res) {
  res.sendFile(index);
});

app.listen(PORT, function() {
  console.log(`Server listening on: ${PORT}`);
});
