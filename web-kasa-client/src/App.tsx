import { RouterProvider } from "react-router-dom";
import { LanguageContextProvider } from "./contexts/LanguageContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { StyleProvider } from "./utils/StyleProvider";
import { router } from "./router";

function App() {
  return (
    <StyleProvider>
      <LanguageContextProvider>
        <ThemeContextProvider>
          <RouterProvider router={router} />
        </ThemeContextProvider>
      </LanguageContextProvider>
    </StyleProvider>
  );
}

export { App };
