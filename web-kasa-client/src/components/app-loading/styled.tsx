import { styled } from "@mui/joy";

export const AppLoading = styled("div")(({ theme }) => ({
  height: "100vh",
  backgroundColor: theme.palette.background.body,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(2),
}));
