const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello bro");
});
const port = 3000;
app.listen(port, () => {
  console.log(`server is running in ${port}`);
});
