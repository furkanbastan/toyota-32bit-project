import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";
import CircularProgress from "@mui/joy/CircularProgress";

import * as productService from "../../../services/ProductService";

import { ProductTableRowMenu } from "../product-table-row-menu";
import * as S from "./styled";
import React from "react";
import { useProductPageActions } from "../../../contexts/ProductPageContext";

function ProductTable() {
  const productsQuery = productService.getProductsQuery(undefined);
  const productPageActions = useProductPageActions();

  React.useEffect(() => {
    if (productsQuery.data !== undefined && productsQuery.data.value !== null) {
      productPageActions.setProducts(productsQuery.data.value);
    }
  }, [productsQuery.data]);

  return (
    <S.ProductTable>
      {productsQuery.isLoading && <CircularProgress size="sm" />}

      {!productsQuery.isLoading && productsQuery.data?.isSuccess && (
        <Table stickyHeader hoverRow>
          <thead>
            <tr>
              <th>Ürün Kodu</th>
              <th>Ürün Adı</th>
              <th>Birim</th>
              <th>KDV</th>
              <th>Fiyat</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {productPageActions.getPaginatedProducts().map((v, i) => (
              <tr key={i}>
                <td>
                  <Typography level="body-xs">{v.code}</Typography>
                </td>
                <td>
                  <Typography level="body-xs">{v.title}</Typography>
                </td>
                <td>
                  <Typography level="body-xs">{v.alt}</Typography>
                </td>
                <td>
                  <Typography level="body-xs">{v.kdv}</Typography>
                </td>
                <td>
                  <Typography level="body-xs">{v.price}</Typography>
                </td>
                <td>
                  <ProductTableRowMenu />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </S.ProductTable>
  );
}

export { ProductTable };
