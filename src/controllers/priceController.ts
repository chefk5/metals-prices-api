import { fetchPrices } from "../services/priceService";
import { Request, Response } from "express";
import { getLatestGoldPrice } from "../utils";

const getGoldPrices = async (
  req: Request<{ currency: string }>,
  res: Response,
) => {
  try {
    const apiGoldPrices = await fetchPrices(req.params.currency);
    const goldPrice = getLatestGoldPrice(apiGoldPrices);
    if (!goldPrice) {
      throw new Error("Failed to fetch prices from the API");
    }
    res.json({ goldPrice: goldPrice });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "error in fetching gold prices" });
  }
};

export { getGoldPrices };
