import React from "react";
import { ProductModel } from "../models/ProductModel";

// interfaces
interface IProductPageContext {
  state?: {
    products?: ProductModel[];
    filteredProducts: ProductModel[];
    pageCount: number;
    pageSize: number;
    currentPage: number;
  };
  actions?: {
    setProducts: (products: ProductModel[]) => any;
    setSearchTerm: (str: string) => any;
    setCurrentPage: (page: number) => any;
    getPaginatedProducts: () => ProductModel[];
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
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const pageSize = 14;

  const context: IProductPageContext = {
    state: {
      products,
      filteredProducts,
      pageCount: Math.ceil(filteredProducts.length / pageSize),
      pageSize,
      currentPage,
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

      setCurrentPage: (page) => setCurrentPage(page),

      getPaginatedProducts: () => {
        const startIndex = (currentPage - 1) * pageSize;
        return filteredProducts.slice(startIndex, startIndex + pageSize);
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
