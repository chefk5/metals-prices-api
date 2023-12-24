"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGoldPrices = void 0;
const priceService_1 = require("../services/priceService");
const utils_1 = require("../utils");
const getGoldPrices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const apiGoldPrices = yield (0, priceService_1.fetchPrices)(req.params.currency);
        const goldPrice = (0, utils_1.getLatestGoldPrice)(apiGoldPrices);
        if (!goldPrice) {
            throw new Error("Failed to fetch prices from the API");
        }
        res.json({ goldPrice: goldPrice });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "error in fetching gold prices" });
    }
});
exports.getGoldPrices = getGoldPrices;
