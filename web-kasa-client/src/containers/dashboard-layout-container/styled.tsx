import { styled } from "@mui/joy";

export const DashboardLayoutContainer = styled("div")(({}) => ({
  display: "flex",
  minHeight: "100vh",
}));

export const Main = styled("main")(({ theme }) => ({
  paddingInline: theme.spacing(2),
  paddingTop: "calc(12px + var(--Header-height))",
  paddingBottom: theme.spacing(2),
  flex: 1,
  display: "flex",
  flexDirection: "column",
  minWidth: 0,
  height: "100dvh",
  gap: theme.spacing(1),

  [theme.breakpoints.up("md")]: {
    paddingInline: theme.spacing(6),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));
