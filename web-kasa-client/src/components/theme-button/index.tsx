import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import IconButton from "@mui/joy/IconButton";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import { useTheme, useThemeActions } from "../../contexts/ThemeContext";

function ThemeButton() {
  const theme = useTheme();
  const themeActions = useThemeActions();

  const Icon = theme.theme == "light" ? <DarkModeIcon /> : <LightModeIcon />;

  return (
    <Dropdown>
      <MenuButton
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: "soft", color: "neutral" } }}
      >
        {Icon}
      </MenuButton>
      <Menu>
        {theme.themes.map((v, i) => (
          <MenuItem
            key={i}
            selected={v.theme == theme.theme ? true : false}
            onClick={() =>
              themeActions.changeTheme(v.theme as "light" | "dark")
            }
          >
            {v.name}
          </MenuItem>
        ))}
      </Menu>
    </Dropdown>
  );
}

export { ThemeButton };
