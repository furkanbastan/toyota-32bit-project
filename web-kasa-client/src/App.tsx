import { AppLoading } from "./components/app-loading";
import { LanguageContextProvider } from "./contexts/LanguageContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { StyleProvider } from "./utils/StyleProvider";

function App() {
  return (
    <StyleProvider>
      <LanguageContextProvider>
        <ThemeContextProvider>
          <AppLoading />
        </ThemeContextProvider>
      </LanguageContextProvider>
    </StyleProvider>
  );
}

export { App };
