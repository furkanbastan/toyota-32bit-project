import React from "react";
import { ProductModel } from "../models/ProductModel";

// interfaces
interface ISalesPageContext {
	state?: {
		sepet: {
			totalPrice: number;
			count: number;
			product: ProductModel;
		}[];
		araToplam: number;
		toplamIndirim: number;
		toplamOdenecek: number;
		nakitOdenen: number;
		kartOdenen: number;
		toplamOdenen: number;
		kalanOdeme: number;
		paraUstu: number;
	};
	actions?: {
		belgeIptal: () => any;
		belgeBitir: () => any;
		kartIleOde: (tutar: number) => any;
		nakitIleOde: (tutar: number) => any;
		sepeteEkle: (product: ProductModel, count: number) => any;
	};
}

// context
const SalesPageContext = React.createContext<ISalesPageContext>({});

// provider
function SalesPageContextProvider({ children }: any) {
	return (
		<SalesPageContext.Provider value={{}}>{children}</SalesPageContext.Provider>
	);
}

// hooks
function useSalesPage() {
	return React.useContext(SalesPageContext).state!;
}

function useSalesPageActions() {
	return React.useContext(SalesPageContext).actions!;
}

export { SalesPageContextProvider, useSalesPage, useSalesPageActions };
