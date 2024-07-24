import React from "react";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import IconButton from "@mui/joy/IconButton";
import { Dialog } from "../../../../../components/dialog";

function ExitButton() {
	const [open, setOpen] = React.useState<boolean>(false);

	return (
		<>
			<IconButton
				color="danger"
				variant="solid"
				size="lg"
				onClick={() => setOpen(true)}
			>
				<LogoutRoundedIcon />
			</IconButton>

			<Dialog
				open={open}
				labelTitle="Çıkış"
				labelContent="Satış işleminden çıkmak istediğinize emin misiniz?"
				labelOkAction="Satış İşlemini İptal Et"
				labelDiscardAction="İptal"
				onClose={() => setOpen(false)}
				onOk={() => setOpen(true)}
			/>
		</>
	);
}

export { ExitButton };
