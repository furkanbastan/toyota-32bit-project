import { LeftSection } from "./left-section";
import { RightSection } from "./right-section";
import * as S from "./styled";

function SalesPageContainer() {
  return (
    <S.SalesPageContainer>
      <LeftSection />
      <RightSection />
    </S.SalesPageContainer>
  );
}

export { SalesPageContainer };
