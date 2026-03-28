const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Server Running ✅");
});

app.get("/callback", (req, res) => {
  const code = req.query.code;
  res.send("Login Success Code: " + code);
});

app.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
});