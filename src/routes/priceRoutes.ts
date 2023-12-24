import express from "express";
import { getGoldPrices } from "../controllers/priceController";
const priceRouter = express.Router();

// Define routes
priceRouter.get("/gold/:currency", getGoldPrices);

export default priceRouter;
