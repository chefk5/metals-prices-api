import express from "express";
import { getGoldPrices } from "../controllers/priceController";
const priceRouter = express.Router();

// Define routes
priceRouter.get("/gold", getGoldPrices);

export default priceRouter;
