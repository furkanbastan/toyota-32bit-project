import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";

import { ThemeButton } from "../../components/theme-button";
import { LanguageButton } from "../../components/language-button";
import { AppLogo } from "../../components/app-logo";

import { LoginCard } from "./login-card";
import * as S from "./styled";

function LoginPageContainer() {
  return (
    <>
      <S.LoginPageContainer>
        <S.Header>
          <AppLogo />
          <Box>
            <ThemeButton />
            <LanguageButton />
          </Box>
        </S.Header>

        <LoginCard />

        <S.Footer>
          <Typography level="body-xs">
            {`@${new Date().getFullYear()} | Toyota&32Bit`}
          </Typography>
        </S.Footer>
      </S.LoginPageContainer>

      <S.BackgroundImage />
    </>
  );
}

export { LoginPageContainer };
