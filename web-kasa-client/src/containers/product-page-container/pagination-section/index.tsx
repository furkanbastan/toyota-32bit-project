import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import usePagination from "@mui/material/usePagination/usePagination";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import {
  useProductPage,
  useProductPageActions,
} from "../../../contexts/ProductPageContext";
import * as S from "./styled";
import React from "react";

function PaginationSection() {
  const productPage = useProductPage();
  const productPageActions = useProductPageActions();

  const { items } = usePagination({ count: productPage.pageCount });

  const selectedPage = Number(items.find((v) => v.selected)?.page);
  const previosItem = items.find((v) => v.type === "previous");
  const nextItem = items.find((v) => v.type === "next");
  const pageItems = items.filter((v) => v.type === "page");

  React.useEffect(() => {
    productPageActions.setCurrentPage(selectedPage);
  }, [selectedPage]);

  return (
    <S.PaginationSection>
      <Button
        size="sm"
        variant="outlined"
        color="neutral"
        startDecorator={<KeyboardArrowLeftIcon />}
        {...previosItem}
      >
        Önceki
      </Button>

      <Box sx={{ flex: 1 }} />

      {pageItems!.map(({ page, selected, ...items }) => (
        <IconButton
          key={page}
          size="sm"
          variant={selected ? "solid" : "outlined"}
          color="neutral"
          {...items}
        >
          {page}
        </IconButton>
      ))}

      <Box sx={{ flex: 1 }} />

      <Button
        size="sm"
        variant="outlined"
        color="neutral"
        endDecorator={<KeyboardArrowRightIcon />}
        {...nextItem}
      >
        Sonraki
      </Button>
    </S.PaginationSection>
  );
}
export { PaginationSection };
