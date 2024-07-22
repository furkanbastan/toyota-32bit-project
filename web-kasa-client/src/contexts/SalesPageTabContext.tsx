import React from "react";
import { CategoryModel } from "../models/CategoryModel";

// interfaces
interface ISalesPageTabContext {
	state?: {
		selectedCategory: CategoryModel | null;
	};
	actions?: {
		setSelectedCategory: (cat: CategoryModel) => any;
		clearSelectedCategory: () => any;
	};
}

// context
const SalesPageTabContext = React.createContext<ISalesPageTabContext>({});

// provider
function SalesPageTabContextProvider({ children }: any) {
	const [selectedCategory, setSelectedCategory] =
		React.useState<CategoryModel | null>(null);

	const context: ISalesPageTabContext = {
		state: {
			selectedCategory,
		},
		actions: {
			setSelectedCategory: (cat) => setSelectedCategory(cat),
			clearSelectedCategory: () => setSelectedCategory(null),
		},
	};

	return (
		<SalesPageTabContext.Provider value={context}>
			{children}
		</SalesPageTabContext.Provider>
	);
}

// hooks
function useSalesPageTab() {
	return React.useContext(SalesPageTabContext).state!;
}

function useSalesPageTabActions() {
	return React.useContext(SalesPageTabContext).actions!;
}

// export
export { SalesPageTabContextProvider, useSalesPageTab, useSalesPageTabActions };
