import CircularProgress from "@mui/joy/CircularProgress";
import { AppLogo } from "../app-logo";
import * as S from "./styled";

function AppLoading() {
  return (
    <S.AppLoading>
      <AppLogo height={40} />
      <CircularProgress size="sm" variant="plain" color="neutral" />
    </S.AppLoading>
  );
}

export { AppLoading };
