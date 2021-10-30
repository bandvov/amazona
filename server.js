const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const { userRouter, productRouter } = require("./routers");
const { PORT } = require("./ENV_VARIABLES");
const { connectToDb } = require("./db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: "*" }));
connectToDb();
// app.use(express.static(path.join(__dirname, "/client/build")));
// app.use(express.static("public"));

// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, "/client/build", "index.html"));
// });

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use((req, res) => {
  res.status(404).json({ message: "Page not found" });
});
app.listen(PORT, () => {
  console.log("server started on port: %s", PORT);
});
