"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLatestGoldPrice = void 0;
const getLatestGoldPrice = (apiGoldPrices) => {
    var _a, _b;
    try {
        return (_b = (_a = apiGoldPrices[0]) === null || _a === void 0 ? void 0 : _a.spreadProfilePrices[0]) === null || _b === void 0 ? void 0 : _b.ask;
    }
    catch (err) {
        console.error("could not filter prices", err);
        return null;
    }
};
exports.getLatestGoldPrice = getLatestGoldPrice;
