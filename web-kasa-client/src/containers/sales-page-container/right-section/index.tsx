import { Input } from "@mui/joy";

import { NumberKeyboard } from "../number-keyboard";
import { TabSection } from "../tab-section";
import { PaymentSection } from "../payment-section";
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
			</S.MiniHeader>

			<TabSection />

			<NumberKeyboard />

			<PaymentSection />
		</S.RightSection>
	);
}

export { RightSection };
