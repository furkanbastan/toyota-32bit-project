import Box from "@mui/joy/Box";

import Typography from "@mui/joy/Typography";

import { ProductAdd } from "./product-add";
import { FilterSection } from "./filter-section";
import { ProductTable } from "./product-table";
import { PaginationSection } from "./pagination-section";
import * as S from "./styled";

function ProductPageContainer() {
  return (
    <S.ProductPageContainer>
      <Box>
        <Typography level="h2" component="h1">
          Ürünler
        </Typography>

        <ProductAdd />
      </Box>

      <FilterSection />

      <ProductTable />

      <PaginationSection />
    </S.ProductPageContainer>
  );
}

export { ProductPageContainer };
