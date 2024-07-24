import IconButton from "@mui/joy/IconButton";

import CampaignIcon from "@mui/icons-material/Campaign";

import * as S from "./styled";

function CampaignButton() {
	return (
		<IconButton color="primary" variant="solid" size="lg">
			<CampaignIcon />
		</IconButton>
	);
}

export { CampaignButton };
