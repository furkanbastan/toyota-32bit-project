import { AppLoading } from "./components/app-loading";
import { StyleProvider } from "./utils/StyleProvider";

function App() {
  return (
    <StyleProvider>
      <AppLoading />
    </StyleProvider>
  );
}

export { App };
