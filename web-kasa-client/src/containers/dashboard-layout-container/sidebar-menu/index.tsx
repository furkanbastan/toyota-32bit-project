import { Link, useLocation } from "react-router-dom";

import Card from "@mui/joy/Card";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";

import WifiTetheringIcon from "@mui/icons-material/WifiTethering";
import WifiTetheringOffIcon from "@mui/icons-material/WifiTetheringOff";

import { useAppStatus } from "../../../contexts/AppStatusContext";
import { MENU_ITEMS } from "./constants";
import * as S from "./styled";

function SidebarMenu() {
  const location = useLocation();

  const appStatus = useAppStatus();

  function isSelected(pathname: string) {
    return location.pathname === pathname ? true : false;
  }

  const storeStatusName = appStatus.isOnline
    ? "Mağaza Online"
    : "Mağaza Offline";

  return (
    <S.SidebarMenu>
      <List size="sm">
        {MENU_ITEMS.map((v, i) => (
          <ListItem key={i}>
            <Link to={v.href}>
              <ListItemButton selected={isSelected(v.href)}>
                {v.icon}
                <ListItemContent>
                  <Typography level="title-sm">{v.name}</Typography>
                </ListItemContent>
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>

      <Card invertedColors variant="soft" color="neutral" size="sm">
        <Box>
          <Typography>Mağaza No:</Typography>
          <Typography>{appStatus.status?.storeNo}</Typography>
        </Box>
        <Box>
          <Typography>Kasa No:</Typography>
          <Typography>{appStatus.status?.boxNo}</Typography>
        </Box>
        <Box>
          <Typography>Kasa Ip No:</Typography>
          <Typography>{appStatus.status?.boxIpNo}</Typography>
        </Box>
        <Box>
          <Typography>Versiyon:</Typography>
          <Typography>{appStatus.status?.version}</Typography>
        </Box>
      </Card>

      <Card color={appStatus.isOnline ? "success" : "danger"} variant="soft">
        {appStatus.isOnline ? <WifiTetheringIcon /> : <WifiTetheringOffIcon />}
        <Typography fontWeight="lg">{storeStatusName}</Typography>
      </Card>
    </S.SidebarMenu>
  );
}

export { SidebarMenu };
