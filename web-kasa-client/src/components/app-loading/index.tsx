import CircularProgress from "@mui/joy/CircularProgress";
import { Logo } from "../logo";
import * as S from "./styled";

function AppLoading() {
  return (
    <S.AppLoading>
      <Logo height={40} />
      <CircularProgress size="sm" variant="plain" color="neutral" />
    </S.AppLoading>
  );
}

export { AppLoading };
