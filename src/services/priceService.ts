import axios, { AxiosResponse } from "axios";
import { SpreadDataEntry } from "../types";

const axiosInstance = axios.create({
  baseURL:
    "https://forex-data-feed.swissquote.com/public-quotes/bboquotes/instrument/XAU/USD",
});

export const fetchPrices = async (): Promise<SpreadDataEntry[]> => {
  const response: AxiosResponse<SpreadDataEntry[]> =
    await axiosInstance.get("");

  return response.data;
};
