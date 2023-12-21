import express, { Express } from "express";
import dotenv from "dotenv";
import priceRouter from "./routes/priceRoutes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use("/v1/prices/", priceRouter);

app.listen(port, () => {
  console.log("lsitenifn");
});
