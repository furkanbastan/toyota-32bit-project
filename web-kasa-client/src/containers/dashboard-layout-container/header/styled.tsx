import { styled } from "@mui/joy";

export const Header = styled("header")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "fixed",
  top: 0,
  width: "100vw",
  height: "var(--Header-height)",
  zIndex: 1,
  padding: theme.spacing(2),
  gap: theme.spacing(1),
  borderBottom: "1px solid",
  borderColor: theme.palette.background.level1,
  boxShadow: theme.shadow.sm,
  backgroundColor: theme.palette.background.surface,

  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));
