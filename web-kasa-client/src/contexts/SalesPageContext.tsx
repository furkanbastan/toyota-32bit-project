import React from "react";

// interfaces
interface ISalesPageContext {
	state?: {};
	actions?: {};
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
