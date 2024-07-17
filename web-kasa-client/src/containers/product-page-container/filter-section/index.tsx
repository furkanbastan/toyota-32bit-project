import React from "react";

import FormControl from "@mui/joy/FormControl";
import Input from "@mui/joy/Input";

import SearchIcon from "@mui/icons-material/Search";

import { useProductPageActions } from "../../../contexts/ProductPageContext";
import * as S from "./styled";

function FilterSection() {
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  const productPageActions = useProductPageActions();

  function handleChangeSearchInput(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
    productPageActions.setSearchTerm(e.target.value);
  }

  return (
    <S.FilterSection>
      <FormControl>
        <Input
          size="sm"
          placeholder="Ürün adı veya Barkod giriniz..."
          value={searchTerm}
          onChange={handleChangeSearchInput}
          startDecorator={<SearchIcon />}
        />
      </FormControl>
    </S.FilterSection>
  );
}

export { FilterSection };
