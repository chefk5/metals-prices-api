"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const priceRoutes_1 = __importDefault(require("./routes/priceRoutes"));
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use("/v1/prices/", priceRoutes_1.default);
app.listen(port, () => {
    console.log("listening ", port);
});
