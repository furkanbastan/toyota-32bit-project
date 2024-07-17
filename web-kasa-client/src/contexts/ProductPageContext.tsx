import React from "react";
import { ProductModel } from "../models/ProductModel";

// interfaces
interface IProductPageContext {
  state?: {
    products?: ProductModel[];
    filteredProducts: ProductModel[];
  };
  actions?: {
    setProducts: (products: ProductModel[]) => any;
    setSearchTerm: (str: string) => any;
  };
}

interface ProviderProps {
  children: React.ReactNode;
}

// context
const ProductPageContext = React.createContext<IProductPageContext>({});

// provider
function ProductPageContextProvider(props: ProviderProps) {
  const [products, setProducts] = React.useState<ProductModel[]>();
  const [filteredProducts, setFilteredProducts] = React.useState<
    ProductModel[]
  >([]);

  const context: IProductPageContext = {
    state: {
      products,
      filteredProducts,
    },

    actions: {
      setProducts: (products) => {
        setProducts(products);
        setFilteredProducts(products);
      },

      setSearchTerm: (str) => {
        if (str === "") {
          setFilteredProducts(products!);
          return;
        }

        setFilteredProducts(
          products!.filter((v) =>
            v.title.toLocaleLowerCase().includes(str.toLocaleLowerCase())
          )
        );
      },
    },
  };

  return (
    <ProductPageContext.Provider value={context}>
      {props.children}
    </ProductPageContext.Provider>
  );
}

// hooks
function useProductPage() {
  return React.useContext(ProductPageContext).state!;
}

function useProductPageActions() {
  return React.useContext(ProductPageContext).actions!;
}

// export
export { ProductPageContextProvider, useProductPage, useProductPageActions };
