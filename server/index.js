const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "../", "client")));

app.get("/", () => {
  res.send("hello, world");
});

app.listen(PORT, err => {
  if (err) {
    console.log("could notconnect with port", PORT, err);
  }
  console.log("...listening on port ", PORT);
});
