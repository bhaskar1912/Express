const express = require("express");

const app = express();

const requestTimestampLogger = (req, res, next) => {
  const istTime = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });
  console.log(`[${istTime}] from ${req.method} to ${req.url}`);
  next();
};

app.use(requestTimestampLogger);

app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(3000, () => {
  console.log(`server is running in 3000`);
});
