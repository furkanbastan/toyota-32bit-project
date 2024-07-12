import React from "react";
import { useTranslation } from "react-i18next";
import { useColorScheme } from "@mui/joy";

// interfaces
interface IThemeContext {
  state?: {
    theme: "light" | "dark";
    themes: {
      theme: string;
      name: string;
    }[];
  };
  actions?: {
    changeTheme: (theme: "light" | "dark") => any;
  };
}

interface ProviderProps {
  children: React.ReactNode;
}

// context
const ThemeContext = React.createContext<IThemeContext>({});

// provider
function ThemeContextProvider(props: ProviderProps) {
  const colorScheme = useColorScheme();
  const translation = useTranslation(undefined, { keyPrefix: "theme" });
console.log(translation);

  const context: IThemeContext = {
    state: {
      theme:
        colorScheme.colorScheme !== undefined
          ? colorScheme.colorScheme
          : "light",
      themes: ["light", "dark"].map((v) => ({
        theme: v,
        name: translation.t(v),
      })),
    },

    actions: {
      changeTheme: (theme: "light" | "dark") =>
        colorScheme.setColorScheme(theme),
    },
  };

  return (
    <ThemeContext.Provider value={context}>
      {props.children}
    </ThemeContext.Provider>
  );
}

// hooks
function useTheme() {
  return React.useContext(ThemeContext).state!;
}

function useThemeActions() {
  return React.useContext(ThemeContext).actions!;
}

// export
export { ThemeContextProvider, useTheme, useThemeActions };
