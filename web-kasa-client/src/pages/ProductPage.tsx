import { ProductPageContainer } from "../containers/product-page-container";
import { ProductPageContextProvider } from "../contexts/ProductPageContext";

function ProductPage() {
  return (
    <ProductPageContextProvider>
      <ProductPageContainer />
    </ProductPageContextProvider>
  );
}

export { ProductPage };
