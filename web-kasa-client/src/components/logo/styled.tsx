import { styled } from "@mui/joy";

export const Logo = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  svg: {
    fill: theme.palette.text.primary,
  },
}));
