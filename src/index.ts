import express, { Express } from "express";
import dotenv from "dotenv";
dotenv.config();
import priceRouter from "./routes/priceRoutes";

const app: Express = express();
const port = process.env.PORT;
console.log("🚀 ~ file: index.ts:9 ~ port:", port);

app.use("/v1/prices/", priceRouter);

app.listen(port, () => {
  console.log("lsitenifn ", port);
});
