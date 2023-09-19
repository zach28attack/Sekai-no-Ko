const express = require("express");
const app = express();
const {getTranslation} = require("./controllers/gTranslations");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/translate/:text", getTranslation);

app.listen(3000);
