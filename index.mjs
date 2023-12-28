import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import "express-async-errors";
import coverageData from "./routes/coverage-data.mjs";

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json({limit: "200mb"}));

app.get("/vi/health", (_req, res) => {
  res.send("230614");
});

// Load the /coverage-data routes
app.use("/coverage-data", coverageData);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.")
})

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
