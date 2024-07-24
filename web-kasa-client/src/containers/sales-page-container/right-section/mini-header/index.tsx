import { CampaignButton } from "./campaign-button";
import { Input } from "@mui/joy";
import { ExitButton } from "./exit-button";

import * as S from "./styled";

function MiniHeader() {
	return (
		<S.MiniHeader>
			<Input
				size="lg"
				color="neutral"
				variant="soft"
				placeholder="Ödeme miktarı"
			/>

			<CampaignButton />

			<ExitButton />
		</S.MiniHeader>
	);
}

export { MiniHeader };
