import React from "react";

// interfaces
interface IBasketContext {
	state?: {};
	actions?: {};
}

// context
const BasketContext = React.createContext<IBasketContext>({});

// provider
function BasketContextProvider({ children }: any) {
	return <BasketContext.Provider value={{}}>{children}</BasketContext.Provider>;
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
