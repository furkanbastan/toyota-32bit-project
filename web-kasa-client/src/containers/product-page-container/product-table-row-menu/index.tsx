import Divider from "@mui/joy/Divider";
import Dropdown from "@mui/joy/Dropdown";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";

import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

function ProductTableRowMenu() {
  return (
    <Dropdown>
      <MenuButton
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: "plain", color: "neutral", size: "sm" } }}
      >
        <MoreHorizRoundedIcon />
      </MenuButton>
      <Menu size="sm" sx={{ minWidth: 140 }}>
        <MenuItem>Düzenle</MenuItem>
        <MenuItem>Detay</MenuItem>

        <Divider />

        <MenuItem color="danger">Sil</MenuItem>
      </Menu>
    </Dropdown>
  );
}

export { ProductTableRowMenu };
