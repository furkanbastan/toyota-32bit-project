import React from "react";

// interfaces
interface ISalesPageContext {
	state?: {
		inputCode: string;
		inputKeyboard: string;
		adet: number;
	};
	actions?: {
		setInputCode: (code: string) => any;
		setInputKeyboard: (keyboard: string) => any;
		setAdet: (adet: number) => any;
		clearInputCode: () => any;
		clearInputKeyboard: () => any;
	};
}

// context
const SalesPageContext = React.createContext<ISalesPageContext>({});

// provider
function SalesPageContextProvider({ children }: any) {
	const [inputCode, setInputCode] = React.useState<string>("");
	const [inputKeyboard, setInputKeyboard] = React.useState<string>("");
	const [adet, setAdet] = React.useState<number>(1);

	const context: ISalesPageContext = {
		state: {
			inputCode,
			inputKeyboard,
			adet,
		},
		actions: {
			setInputCode: (code) => setInputCode(code),

			setInputKeyboard: (keyboard) => setInputKeyboard(keyboard),

			setAdet: (adet) => setAdet(adet),

			clearInputCode: () => setInputCode(""),

			clearInputKeyboard: () => setInputKeyboard(""),
		},
	};
	return (
		<SalesPageContext.Provider value={context}>
			{children}
		</SalesPageContext.Provider>
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
