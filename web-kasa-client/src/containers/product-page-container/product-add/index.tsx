import React from "react";

import Modal from "@mui/joy/Modal";
import Button from "@mui/joy/Button";
import ModalDialog from "@mui/joy/ModalDialog";

import AddIcon from "@mui/icons-material/Add";

function ProductAdd() {
  const [open, setOpen] = React.useState<boolean>(false);

  function handleCloseModal() {
    setOpen(false);
  }

  function handleClickOpenModal() {
    setOpen(true);
  }

  return (
    <>
      <Button
        size="sm"
        color="success"
        startDecorator={<AddIcon />}
        onClick={handleClickOpenModal}
      >
        Ürün Ekle
      </Button>
      <Modal open={open} onClose={handleCloseModal}>
        <ModalDialog>add product modal</ModalDialog>
      </Modal>
    </>
  );
}

export { ProductAdd };
