import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import IconButton from "@mui/joy/IconButton";

import PublicIcon from "@mui/icons-material/Public";

import {
  useLanguage,
  useLanguageActions,
} from "../../contexts/LanguageContext";

function LanguageButton() {
  const language = useLanguage();
  const languageActions = useLanguageActions();

  return (
    <Dropdown>
      <MenuButton
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: "soft", color: "neutral" } }}
      >
        <PublicIcon />
      </MenuButton>
      <Menu>
        {language.langs.map((v, i) => (
          <MenuItem
            key={i}
            selected={language.lang == v.lang}
            onClick={() => languageActions.changeLang(v.lang)}
          >
            {v.name}
          </MenuItem>
        ))}
      </Menu>
    </Dropdown>
  );
}

export { LanguageButton };
