import express, { Express } from "express";
import dotenv from "dotenv";
dotenv.config();
import priceRouter from "./routes/priceRoutes";

const app: Express = express();
const port = process.env.PORT;

app.use("/v1/prices/", priceRouter);

app.listen(port, () => {
  console.log("listening ", port);
});
