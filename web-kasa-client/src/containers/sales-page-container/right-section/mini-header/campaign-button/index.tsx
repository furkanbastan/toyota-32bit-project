import IconButton from "@mui/joy/IconButton";

import CampaignIcon from "@mui/icons-material/Campaign";


function CampaignButton() {
	return (
		<IconButton color="primary" variant="solid" size="lg">
			<CampaignIcon />
		</IconButton>
	);
}

export { CampaignButton };
