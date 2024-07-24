import React from "react";

import Button from "@mui/joy/Button";

import PaymentsIcon from "@mui/icons-material/Payments";
import PaymentIcon from "@mui/icons-material/Payment";
import CurrencyLiraIcon from "@mui/icons-material/CurrencyLira";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import UndoIcon from "@mui/icons-material/Undo";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import ClearIcon from "@mui/icons-material/Clear";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import * as S from "./styled";
import { Box } from "@mui/joy";

function PaymentSection() {
	const [basket, setBasket] = React.useState<boolean>(true);

	return (
		<S.PaymentSection>
			<Button
				color="primary"
				variant="soft"
				startDecorator={<CurrencyLiraIcon fontSize="small" />}
			>
				Nakit
			</Button>

			<Button
				color="primary"
				variant="soft"
				startDecorator={<PaymentIcon fontSize="small" />}
			>
				Kart
			</Button>

			<Button
				color="primary"
				variant="soft"
				startDecorator={<CardGiftcardIcon fontSize="small" />}
			>
				Puan
			</Button>

			<Button
				color="neutral"
				variant="soft"
				startDecorator={<PaymentsIcon fontSize="small" />}
			>
				Diğer
			</Button>

			<Button
				color="success"
				variant="soft"
				startDecorator={<RemoveRedEyeIcon fontSize="small" />}
			>
				Fiyat Gör
			</Button>

			<Button
				color="danger"
				variant="solid"
				startDecorator={<ClearIcon fontSize="small" />}
			>
				Belge İptal
			</Button>

			<Box>
				{!basket && (
					<>
						<Button
							variant="plain"
							startDecorator={<UndoIcon fontSize="small" />}
							onClick={() => setBasket(true)}
						>
							Sepete Dön
						</Button>

						<Button
							color="success"
							startDecorator={<DoneAllIcon fontSize="small" />}
						>
							Belge Bitir
						</Button>
					</>
				)}

				{basket && (
					<Button
						color="warning"
						startDecorator={<ShoppingBasketIcon />}
						onClick={() => setBasket(false)}
					>
						Sepeti Kapat
					</Button>
				)}
			</Box>
		</S.PaymentSection>
	);
}

export { PaymentSection };
