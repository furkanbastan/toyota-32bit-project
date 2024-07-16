import { styled } from "@mui/joy";

export const NotFoundPageContainer = styled("div")(({ theme }) => ({
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.2),
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.background.body,
  color: theme.palette.text.primary,
}));
