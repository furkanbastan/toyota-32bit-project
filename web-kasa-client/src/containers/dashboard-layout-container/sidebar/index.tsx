import React from "react";

import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";
import IconButton from "@mui/joy/IconButton";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

import { AppLogo } from "../../../components/app-logo";
import { Dialog } from "../../../components/dialog";

import { useSidebarActions } from "../../../contexts/SidebarContext";
import { useAuth, useAuthActions } from "../../../contexts/AuthContext";

import { SidebarMenu } from "../sidebar-menu";
import * as S from "./styled";

function Sidebar() {
  const [openLogoutModal, setOpenLogoutModal] = React.useState<boolean>(false);

  const sidebarActions = useSidebarActions();

  const auth = useAuth();

  const authActions = useAuthActions();

  const fullname = `${auth.user?.firstname} ${auth.user?.surname}`;

  return (
    <S.Sidebar className="Sidebar">
      <S.SidebarOverlay
        className="Sidebar-overlay"
        onClick={sidebarActions?.closeSidebar}
      />

      <AppLogo />

      <Divider />

      <SidebarMenu />

      <Divider />

      <S.SidebarFooter>
        <Avatar variant="solid" size="sm" />
        <Box>
          <Typography level="title-sm">{fullname}</Typography>
          <Typography level="body-xs">{auth.user?.rolename}</Typography>
        </Box>
        <IconButton
          size="sm"
          variant="plain"
          color="danger"
          onClick={() => setOpenLogoutModal(true)}
        >
          <LogoutRoundedIcon />
        </IconButton>
        <Dialog
          open={openLogoutModal}
          labelTitle="Çıkış Yap"
          labelContent="Çıkış yapmak istediğinize emin misiniz?"
          labelDiscardAction="İptal"
          labelOkAction="Çıkış Yap"
          onClose={() => setOpenLogoutModal(false)}
          onOk={authActions.logout}
        />
      </S.SidebarFooter>
    </S.Sidebar>
  );
}

export { Sidebar };
