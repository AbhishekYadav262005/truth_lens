const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const detectRoutes = require("./routes/detectRoute");
const authRoutes = require("./auth/authRoutes");
const historyRoutes = require("./routes/historyRoute");
const reportRoutes = require("./routes/reportRoutes");

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/",(req,res)=>{
  res.send("Welcome to TruthLens API");
});
app.use("/api/detect",detectRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/history",historyRoutes);
app.use("/api/report",reportRoutes);

module.exports = app;