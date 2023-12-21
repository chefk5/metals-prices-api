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
const getGoldPrices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fetchedGoldPrices = yield (0, priceService_1.fetchPrices)();
        console.log("🚀 ~ file: priceController.ts:7 ~ getGoldPrices ~ fetchedGoldPrices:", fetchedGoldPrices);
        res.json({ fetchedGoldPrices });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "error in fethcing gold prices" });
    }
});
exports.getGoldPrices = getGoldPrices;
