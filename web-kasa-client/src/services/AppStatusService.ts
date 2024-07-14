import axios from "axios";
import useSWR from "swr";

import { AppStatusModel } from "../models/AppStatusModel";
import { ResponseModel } from "../models/ResponseModel";
import { delay } from "../utils/delay";

export const getAppStatusQuery = () => {
  const fetcher = async (url: string) => {
    await delay();

    const res = await axios.get<AppStatusModel>(url);

    const result: ResponseModel<AppStatusModel> = {
      value: res.data !== undefined ? res.data : null,
      isSuccess: res.data !== undefined ? true : false,
    };

    return result;
  };

  return useSWR("mocks/app-status.json", fetcher);
};
