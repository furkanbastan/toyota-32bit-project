import { SalesPageContainer } from "../containers/sales-page-container";
import { BasketContextProvider } from "../contexts/BasketContext";
import { SalesPageContextProvider } from "../contexts/SalesPageContext";

function SalesPage() {
	return (
		<SalesPageContextProvider>
			<BasketContextProvider>
				<SalesPageContainer />
			</BasketContextProvider>
		</SalesPageContextProvider>
	);
}

export { SalesPage };
