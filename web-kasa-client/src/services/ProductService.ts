import axios from "axios";
import { ProductModel } from "../models/ProductModel";
import { ResponseModel } from "../models/ResponseModel";
import useSWR from "swr";
import { delay } from "../utils/delay";

export const getProductsQuery = () => {
  const fetcher = async (url: string) => {
    await delay();

    const res = await axios.get<ProductModel[]>(url);

    const result: ResponseModel<ProductModel[]> = {
      value: res.data,
      isSuccess: res.data !== undefined ? true : false,
    };

    return result;
  };

  return useSWR("mocks/products.json", fetcher);
};
