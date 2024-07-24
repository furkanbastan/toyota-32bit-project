import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";

import * as S from "./styled";

function PaymentInfo() {
	return (
		<S.PaymentInfo>
			<Box>
				<Typography>Nakit Ödenen:</Typography>
				<Typography>1500&nbsp;TL</Typography>
			</Box>

			<Divider />

			<Box>
				<Typography>Kart Ödenen:</Typography>
				<Typography>1300&nbsp;TL</Typography>
			</Box>

			<Divider />

			<Box>
				<Typography>Toplam Ödenen:</Typography>
				<Typography>1800&nbsp;TL</Typography>
			</Box>

			<Divider />

			<Box>
				<Typography color="danger">Kalan Ödeme:</Typography>
				<Typography color="danger">0&nbsp;TL</Typography>
			</Box>

			<Divider />

			<Box>
				<Typography color="success">Para Üstü:</Typography>
				<Typography color="success">200&nbsp;TL</Typography>
			</Box>
		</S.PaymentInfo>
	);
}

export { PaymentInfo };
