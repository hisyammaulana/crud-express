var express = require("express");
const bodyParser = require("body-parser");

(app = express()),
  (port = process.env.PORT || 3000),
  (controller = require("./controller"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var link = require("./routes");
link(app);

app.listen(port);
