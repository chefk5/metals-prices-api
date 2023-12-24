import { SpreadDataEntry } from "../types";

export const getLatestGoldPrice = (apiGoldPrices: SpreadDataEntry[]) => {
  try {
    return apiGoldPrices[0]?.spreadProfilePrices[0]?.ask;
  } catch (err) {
    console.error("could not filter prices", err);
    return null;
  }
};
