import { Input } from "@mui/joy";

import { NumberKeyboard } from "../number-keyboard";
import * as S from "./styled";
import { PaymentSection } from "../payment-section";

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

      <S.Products>products</S.Products>

      <NumberKeyboard />

      <PaymentSection />
    </S.RightSection>
  );
}

export { RightSection };
