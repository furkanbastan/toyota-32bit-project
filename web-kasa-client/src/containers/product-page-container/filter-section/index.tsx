import * as React from "react";

import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import ModalClose from "@mui/joy/ModalClose";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Sheet from "@mui/joy/Sheet";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";

import * as S from "./styled";

function FilterSection() {
  const [openFilterModal, setOpenFilterModal] = React.useState<boolean>(false);

  const filters = () => (
    <>
      <FormControl size="sm">
        <FormLabel>Status</FormLabel>
        <Select size="sm" placeholder="Filter by status">
          <Option value="paid">Paid</Option>
          <Option value="pending">Pending</Option>
          <Option value="refunded">Refunded</Option>
          <Option value="cancelled">Cancelled</Option>
        </Select>
      </FormControl>
      <FormControl size="sm">
        <FormLabel>Category</FormLabel>
        <Select size="sm" placeholder="All">
          <Option value="all">All</Option>
          <Option value="refund">Refund</Option>
          <Option value="purchase">Purchase</Option>
          <Option value="debit">Debit</Option>
        </Select>
      </FormControl>
    </>
  );
  return (
    <>
      <S.FilterSection>
        <FormControl>
          <FormLabel>Search for category.</FormLabel>
          <Input
            size="sm"
            placeholder="Ürün adı veya Barkod giriniz..."
            startDecorator={<SearchIcon />}
          />
        </FormControl>
        {filters()}
      </S.FilterSection>

      <S.FilterSectionMobile>
        <Input size="sm" placeholder="Search" startDecorator={<SearchIcon />} />
        <IconButton
          size="sm"
          variant="outlined"
          color="neutral"
          onClick={() => setOpenFilterModal(true)}
        >
          <FilterAltIcon />
        </IconButton>
        <Modal open={openFilterModal} onClose={() => setOpenFilterModal(false)}>
          <ModalDialog aria-labelledby="filter-modal" layout="fullscreen">
            <ModalClose />
            <Typography id="filter-modal" level="h2">
              Filters
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Sheet sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {filters()}
              <Button color="primary" onClick={() => setOpenFilterModal(false)}>
                Submit
              </Button>
            </Sheet>
          </ModalDialog>
        </Modal>
      </S.FilterSectionMobile>
    </>
  );
}

export { FilterSection };
