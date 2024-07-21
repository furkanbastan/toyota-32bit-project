import axios from "axios";
import useSWR from "swr";

import { CategoryModel } from "../models/CategoryModel";
import { ResponseModel } from "../models/ResponseModel";
import { delay } from "../utils/delay";

export const getCategoriesQuery = () => {
	const fetcher = async (url: string) => {
		await delay();

		const res = await axios.get<CategoryModel[]>(url);

		const result: ResponseModel<CategoryModel[]> = {
			isSuccess: res.data !== undefined ? true : false,
			value: res.data ?? null,
		};

		return result;
	};

	return useSWR("mocks/categories.json", fetcher);
};
