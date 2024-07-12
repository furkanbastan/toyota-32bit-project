import { dividerClasses, styled } from "@mui/joy";

export const LoginCard = styled("main")(({ theme }) => ({
  marginBlock: "auto",
  paddingBlock: theme.spacing(2),
  paddingBottom: theme.spacing(5),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  width: 400,
  maxWidth: "100%",
  mx: "auto",
  borderRadius: "sm",
  alignSelf: "center",

  "& form": {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },

  [`& .MuiFormLabel-asterisk`]: {
    visibility: "hidden",
  },

  [`& .${dividerClasses.root}`]: {
    color: theme.palette.text.tertiary,
  },
}));

export const TitleWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  marginBottom: theme.spacing(2),
}));

export const LoginForm = styled("form")(({ theme }) => ({
  paddingTop: theme.spacing(2),
}));
