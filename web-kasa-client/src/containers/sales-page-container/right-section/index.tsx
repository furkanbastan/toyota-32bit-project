import { NumberKeyboard } from "./number-keyboard";
import { TabSection } from "./tab-section";
import { PaymentSection } from "./payment-section";
import { MiniHeader } from "./mini-header";
import { PaymentInfo } from "./payment-info";

import * as S from "./styled";

function RightSection() {
	return (
		<S.RightSection>
			<MiniHeader />

			<TabSection />

			<NumberKeyboard />

			<PaymentSection />

			<PaymentInfo />
		</S.RightSection>
	);
}

export { RightSection };
