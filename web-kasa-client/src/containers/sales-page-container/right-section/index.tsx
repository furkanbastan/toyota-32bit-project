import { Input } from "@mui/joy";

import { NumberKeyboard } from "../number-keyboard";
import { TabSection } from "../tab-section";
import { PaymentSection } from "../payment-section";
import { CampaignButton } from "./campaign-button";
import { ExitButton } from "./exit-button";
import * as S from "./styled";

function RightSection() {
	return (
		<S.RightSection>
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

			<TabSection />

			<NumberKeyboard />

			<PaymentSection />
		</S.RightSection>
	);
}

export { RightSection };
