import { RouterProvider } from "react-router-dom";

import { router } from "./router";

import { StyleProvider } from "./utils/StyleProvider";
import { LanguageContextProvider } from "./contexts/LanguageContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { AuthContextProvider } from "./contexts/AuthContext";
import { SidebarContextProvider } from "./contexts/SidebarContext";
import { AppStatusContextProvider } from "./contexts/AppStatusContext";
import { SalesPageTabContextProvider } from "./contexts/SalesPageTabContext";

import * as appStatusService from "./services/AppStatusService";
import { AppLoading } from "./components/app-loading";

function App() {
	const appStatusQuery = appStatusService.getAppStatusQuery();

	if (appStatusQuery.isLoading)
		return (
			<StyleProvider>
				<AppLoading />
			</StyleProvider>
		);

	const status = appStatusQuery.data?.value ?? null;

	return (
		<StyleProvider>
			<LanguageContextProvider>
				<ThemeContextProvider>
					<AuthContextProvider>
						<SidebarContextProvider>
							<AppStatusContextProvider status={status}>
								<SalesPageTabContextProvider>
									<RouterProvider router={router} />
								</SalesPageTabContextProvider>
							</AppStatusContextProvider>
						</SidebarContextProvider>
					</AuthContextProvider>
				</ThemeContextProvider>
			</LanguageContextProvider>
		</StyleProvider>
	);
}

export { App };
