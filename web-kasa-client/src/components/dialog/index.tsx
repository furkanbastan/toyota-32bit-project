import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import Divider from "@mui/joy/Divider";
import DialogContent from "@mui/joy/DialogContent";
import DialogActions from "@mui/joy/DialogActions";
import Button from "@mui/joy/Button";

interface DialogProps {
  open: boolean;
  onClose: any;
  onOk: any;
  labelTitle: string;
  labelContent: string;
  labelDiscardAction: string;
  labelOkAction: string;
  variant?: "plain" | "soft" | "outlined" | "solid";
  color?: "primary" | "danger" | "success" | "neutral" | "warning";
}

function Dialog(props: DialogProps) {
  return (
    <Modal open={props.open} onClose={props.onClose} sx={{ zIndex: 9999999 }}>
      <ModalDialog
        variant={props.variant || "soft"}
        color={props.color || "neutral"}
        role="alertdialog"
      >
        <DialogTitle>{props.labelTitle}</DialogTitle>
        <Divider />
        <DialogContent>{props.labelContent}</DialogContent>
        <DialogActions>
          <Button variant="solid" color="danger" onClick={props.onOk}>
            {props.labelOkAction}
          </Button>
          <Button variant="plain" color="neutral" onClick={props.onClose}>
            {props.labelDiscardAction}
          </Button>
        </DialogActions>
      </ModalDialog>
    </Modal>
  );
}

export { Dialog };
