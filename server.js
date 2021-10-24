const express = require("express");
const { products } = require("./data ");
const app = express();
const PORT = 5000;
const cors = require("cors");
const path = require("path");

app.use(cors({ origin: "*" }));
app.use(express.static(path.join(__dirname, "/client/build")));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

app.get("/api/products", (req, res) => {
  res.json({ products });
});
app.listen(PORT, () => {
  console.log("server started on port: %s", PORT);
});
