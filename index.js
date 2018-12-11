var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.send("00:00:00");
});

app.listen(3000, function() {
  console.log("Servidor escuchando por el puerto 3000");
});
