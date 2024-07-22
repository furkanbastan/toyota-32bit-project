import React from "react";
import { ProductModel } from "../models/ProductModel";

// interfaces
interface IFavoriteProductsContext {
	state?: {
		favorites: ProductModel[];
	};
	actions?: {
		addFavorite: (product: ProductModel) => any;
		removeFavorite: (product: ProductModel) => any;
	};
}

// context
const FavoriteProductsContext = React.createContext<IFavoriteProductsContext>(
	{}
);

// provider
function FavoriteProductsContextProvider({ children }: any) {
	const [favorites, setFavorites] = React.useState<ProductModel[]>([]);

	const context: IFavoriteProductsContext = {
		state: {
			favorites,
		},
		actions: {
			addFavorite: (product) => setFavorites([...favorites, product]),
			removeFavorite: (product) =>
				setFavorites(favorites.filter((v) => v.id !== product.id)),
		},
	};

	return (
		<FavoriteProductsContext.Provider value={context}>
			{children}
		</FavoriteProductsContext.Provider>
	);
}

// hooks
function useFavoriteProducts() {
	return React.useContext(FavoriteProductsContext).state!;
}

function useFavoriteProductsActions() {
	return React.useContext(FavoriteProductsContext).actions!;
}

// export
export {
	FavoriteProductsContextProvider,
	useFavoriteProducts,
	useFavoriteProductsActions,
};
