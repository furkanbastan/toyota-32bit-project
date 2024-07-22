import axios from "axios";
import { ProductModel } from "../models/ProductModel";
import { ResponseModel } from "../models/ResponseModel";
import useSWR from "swr";
import { delay } from "../utils/delay";
import useSWRMutation from "swr/mutation";

export const getProductsQuery = (codeType: number | undefined) => {
	const fetcher = async (url: string) => {
		await delay();

		const res = await axios.get<ProductModel[]>(url);

		const result: ResponseModel<ProductModel[]> = {
			value:
				codeType !== undefined
					? res.data.filter((v) => v.codeType == codeType)
					: res.data,
			isSuccess: res.data !== undefined ? true : false,
		};

		return result;
	};

	return useSWR("mocks/products.json", fetcher);
};

export const getProductsMutation = () => {
	const fetcher = async (url: string, { arg }: { arg: string }) => {
		await delay();

		const res = await axios.get<ProductModel[]>(url);

		const cat = res.data.filter((v) => v.categoryId.toString() === arg);

		const result: ResponseModel<ProductModel[]> = {
			isSuccess: res.data ? true : false,
			value: res.data ? cat : null,
		};

		return result;
	};

	return useSWRMutation("mocks/products.json", fetcher);
};
