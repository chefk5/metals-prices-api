import axios, { AxiosResponse } from "axios";
import { SpreadDataEntry } from "../types";

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
});

export const fetchPrices = async (
  currency: string,
): Promise<SpreadDataEntry[]> => {
  const URLparams = `/${currency}`;
  const response: AxiosResponse<SpreadDataEntry[]> =
    await axiosInstance.get(URLparams);

  return response.data;
};
