import { fetchPrices } from "../services/priceService";
import { Request, Response } from "express";

const getGoldPrices = async (req: Request, res: Response) => {
  try {
    const fetchedGoldPrices = await fetchPrices();
    console.log(
      "🚀 ~ file: priceController.ts:7 ~ getGoldPrices ~ fetchedGoldPrices:",
      fetchedGoldPrices,
    );
    res.json({ fetchedGoldPrices });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "error in fethcing gold prices" });
  }
};

export { getGoldPrices };
