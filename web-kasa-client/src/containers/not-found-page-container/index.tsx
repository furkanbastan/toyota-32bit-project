import { Typography } from "@mui/joy";
import { AppLogo } from "../../components/app-logo";
import * as S from "./styled";
import { useTranslation } from "react-i18next";

function NotFoundPageContainer() {
  const translation = useTranslation(undefined, {
    keyPrefix: "not-found-page",
  });

  return (
    <S.NotFoundPageContainer>
      <AppLogo height={22} />

      <Typography level="h1" fontWeight="sm">
        {translation.t("not-found")}
      </Typography>
    </S.NotFoundPageContainer>
  );
}

export { NotFoundPageContainer };
