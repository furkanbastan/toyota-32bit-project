import React from "react";
import { useTranslation } from "react-i18next";

// interfaces
interface ILanguageContext {
  state?: {
    lang: string;
    langs: { lang: string; name: string }[];
  };
  actions?: {
    changeLang: (lang: string) => any;
  };
}

// context
const LanguageContext = React.createContext<ILanguageContext>({});

// provider
function LanguageContextProvider({ children }: any) {
  const translation = useTranslation(undefined, { keyPrefix: "langs" });

  const context: ILanguageContext = {
    state: {
      lang: translation.i18n.language,
      langs: ["tr", "en"].map((v) => ({
        name: translation.t(v),
        lang: v,
      })),
    },
    actions: {
      changeLang: (lang: string) => translation.i18n.changeLanguage(lang),
    },
  };

  React.useEffect(() => {
    translation.i18n.changeLanguage("tr");
  }, []);

  return (
    <LanguageContext.Provider value={context}>
      {children}
    </LanguageContext.Provider>
  );
}

// hooks
function useLanguage() {
  return React.useContext(LanguageContext).state!;
}

function useLanguageActions() {
  return React.useContext(LanguageContext).actions!;
}

// export
export { LanguageContextProvider, useLanguage, useLanguageActions };
