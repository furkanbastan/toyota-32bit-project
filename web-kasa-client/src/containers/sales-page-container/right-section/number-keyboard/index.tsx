import { Box, Button, IconButton } from "@mui/joy";

import BackspaceIcon from "@mui/icons-material/Backspace";
import TimesOneMobiledataIcon from "@mui/icons-material/TimesOneMobiledata";
import SubdirectoryArrowLeftIcon from "@mui/icons-material/SubdirectoryArrowLeft";

import * as S from "./styled";

function NumberKeyboard() {
	return (
		<S.NumberKeyboard>
			<IconButton color="primary" variant="soft" size="lg">
				7
			</IconButton>

			<IconButton color="primary" variant="soft" size="lg">
				8
			</IconButton>

			<IconButton color="primary" variant="soft" size="lg">
				9
			</IconButton>

			<IconButton color="primary" variant="soft" size="lg">
				4
			</IconButton>

			<IconButton color="primary" variant="soft" size="lg">
				5
			</IconButton>

			<IconButton color="primary" variant="soft" size="lg">
				6
			</IconButton>

			<IconButton color="primary" variant="soft" size="lg">
				1
			</IconButton>

			<IconButton color="primary" variant="soft" size="lg">
				2
			</IconButton>

			<IconButton color="primary" variant="soft" size="lg">
				3
			</IconButton>

			<IconButton color="primary" variant="soft" size="lg">
				.
			</IconButton>

			<IconButton color="primary" variant="soft" size="lg">
				0
			</IconButton>

			<IconButton color="danger" variant="soft">
				<BackspaceIcon fontSize="small" />
			</IconButton>

			<Box>
				<Button
					color="warning"
					size="lg"
					startDecorator={<TimesOneMobiledataIcon />}
				>
					Adet
				</Button>

				<Button
					color="success"
					size="lg"
					startDecorator={<SubdirectoryArrowLeftIcon />}
				>
					Giriş
				</Button>
			</Box>
		</S.NumberKeyboard>
	);
}

export { NumberKeyboard };
