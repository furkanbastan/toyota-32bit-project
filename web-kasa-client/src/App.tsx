import { RouterProvider } from "react-router-dom";
import { LanguageContextProvider } from "./contexts/LanguageContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { StyleProvider } from "./utils/StyleProvider";
import { router } from "./router";
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <StyleProvider>
      <LanguageContextProvider>
        <ThemeContextProvider>
          <AuthContextProvider>
            <RouterProvider router={router} />
          </AuthContextProvider>
        </ThemeContextProvider>
      </LanguageContextProvider>
    </StyleProvider>
  );
}

export { App };
