import axios from "axios";
import useSWRMutation from "swr/mutation";

import { delay } from "../utils/delay";
import { LoginModel } from "../models/LoginModel";
import { UserModel } from "../models/UserModel";
import { ResponseModel } from "../models/ResponseModel";

export const loginMutation = () => {
  const fetcher = async (url: string, { arg }: { arg: LoginModel }) => {
    await delay();

    const res = await axios.get<UserModel[]>(url);

    const user = res.data.find(
      (v) => v.usercode == arg.usercode && v.password == arg.password
    );

    const result: ResponseModel<UserModel> = {
      isSuccess: user !== undefined ? true : false,
      value: user !== undefined ? user : null,
    };

    return result;
  };

  return useSWRMutation("mocks/users.json", fetcher);
};
