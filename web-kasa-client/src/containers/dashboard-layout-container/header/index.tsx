import IconButton from "@mui/joy/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { useSidebarActions } from "../../../contexts/SidebarContext";
import * as S from "./styled";

function Header() {
  const sidebarActions = useSidebarActions();

  return (
    <S.Header>
      <IconButton
        variant="outlined"
        color="neutral"
        size="sm"
        onClick={sidebarActions?.openSidebar}
      >
        <MenuIcon />
      </IconButton>
    </S.Header>
  );
}

export { Header };
