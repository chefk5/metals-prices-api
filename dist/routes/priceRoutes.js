"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const priceController_1 = require("../controllers/priceController");
const priceRouter = express_1.default.Router();
// Define routes
priceRouter.get("/gold/:currency", priceController_1.getGoldPrices);
exports.default = priceRouter;
