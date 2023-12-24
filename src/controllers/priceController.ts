import { fetchPrices } from "../services/priceService";
import { Request, Response } from "express";

const getGoldPrices = async (
  req: Request<{ currency: string }>,
  res: Response,
) => {
  try {
    const fetchedGoldPrices = await fetchPrices(req.params.currency);
    res.json({ fetchedGoldPrices });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "error in fetching gold prices" });
  }
};

export { getGoldPrices };
