import { boxClasses, styled } from "@mui/joy";

export const Sidebar = styled("aside")(({ theme }) => ({
  position: "fixed",
  transform: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
  transition: "transform 0.4s, width 0.4s",
  zIndex: 99,
  height: "100dvh",
  width: "var(--Sidebar-width)",
  top: 0,
  padding: theme.spacing(2),
  flexShrink: 0,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  borderRight: "1px solid",
  borderColor: theme.palette.divider,
  backgroundColor: theme.palette.background.surface,

  [theme.breakpoints.up("md")]: {
    position: "sticky",
    transform: "none",
  },
}));

export const SidebarOverlay = styled("div")(({ theme }) => ({
  position: "fixed",
  zIndex: 9998,
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  opacity: "var(--SideNavigation-slideIn)",
  backgroundColor: theme.palette.background.backdrop,
  transition: "opacity 0.4s",
  transform:
    "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",

  [theme.breakpoints.up("lg")]: {
    transform: "translateX(-100%)",
  },
}));

export const SidebarFooter = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),

  [`& .${boxClasses.root}`]: {
    flex: 1,
    minWidth: 0,
  },
}));
