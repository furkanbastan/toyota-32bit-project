import React from "react";
import { ProductModel } from "../models/ProductModel";

// interfaces
interface IBasketContext {
	state?: {
		sepet: {
			adet: number;
			product: ProductModel;
		}[];
		sepetAcik: boolean;
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
		sepeteEkle: (product: ProductModel, adet: number) => any;
		satirSil: (id: number) => any;
		nakitOde: (odeme: number) => any;
		kartOde: (odeme: number) => any;
		sepetAc: () => any;
		sepetKapat: () => any;
	};
}

// context
const BasketContext = React.createContext<IBasketContext>({});

// provider
function BasketContextProvider({ children }: any) {
	// states
	const [sepet, setSepet] = React.useState<
		{ adet: number; product: ProductModel }[]
	>([]);

	const [nakitOdenen, setNakitOdenen] = React.useState<number>(0);

	const [kartOdenen, setKartOdenen] = React.useState<number>(0);

	const [sepetAcik, setSepetAcik] = React.useState<boolean>(true);

	// computed states
	const araToplam: number = sepet.reduce(
		(acc, v) => acc + v.adet * v.product.price,
		0
	);

	const toplamIndirim: number = 0;

	const toplamOdenecek: number = araToplam - toplamIndirim;

	const toplamOdenen: number = nakitOdenen + kartOdenen;

	const kalanOdeme: number =
		toplamOdenecek - toplamOdenen > 0 ? toplamOdenecek - toplamOdenen : 0;

	const paraUstu: number =
		toplamOdenen - toplamOdenecek > 0 ? toplamOdenen - toplamOdenecek : 0;

	// context object
	const context: IBasketContext = {
		state: {
			sepet,
			sepetAcik,
			araToplam,
			toplamIndirim,
			toplamOdenecek,
			nakitOdenen,
			kartOdenen,
			toplamOdenen,
			kalanOdeme,
			paraUstu,
		},
		actions: {
			sepeteEkle: (product, adet) => {
				setSepet((sepet) => {
					var p = sepet.find((v) => v.product.id === product.id);

					if (p !== undefined) {
						return [
							...sepet.filter((v) => v.product.id !== product.id),
							{
								adet: adet + p.adet,
								product,
							},
						];
					} else {
						return [
							{
								adet,
								product,
							},
							...sepet,
						];
					}
				});
			},

			satirSil: (id) => {
				setSepet(sepet.filter((v) => v.product.id !== id));
			},

			nakitOde: (odeme) => setNakitOdenen(odeme),

			kartOde: (odeme) => setKartOdenen(odeme),

			sepetAc: () => setSepetAcik(true),

			sepetKapat: () => setSepetAcik(false),
		},
	};

	return (
		<BasketContext.Provider value={context}>{children}</BasketContext.Provider>
	);
}

// hooks
function useBasket() {
	return React.useContext(BasketContext).state!;
}

function useBasketActions() {
	return React.useContext(BasketContext).actions!;
}

// export
export { BasketContextProvider, useBasket, useBasketActions };
