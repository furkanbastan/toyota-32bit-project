import { styled } from "@mui/joy";

export const AppLogo = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  svg: {
    fill: theme.palette.text.primary,
  },
}));
