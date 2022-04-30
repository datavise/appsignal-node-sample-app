const { appsignal } = require("./appsignal");

const express = require("express");
const app = express();
const port = 8081;

var count = 0;

app.get("/", (req, res) => {
  var output = "count:";

  count++;
  output += count;

  res.send(output);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
