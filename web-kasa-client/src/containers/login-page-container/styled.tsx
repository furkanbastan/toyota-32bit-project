import { boxClasses, styled } from "@mui/joy";

export const LoginPageContainer = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100vh",
  transition: "width 0.4s",
  transitionDelay: "0.5s",
  position: "relative",
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  paddingInline: theme.spacing(2),
  justifyContent: "flex-end",
  backdropFilter: "blur(12px)",
  backgroundColor: "rgba(255 255 255 / 0.2)",

  [theme.breakpoints.up("md")]: {
    width: "50vw",
  },

  [theme.getColorSchemeSelector("dark")]: {
    backgroundColor: "rgba(19 19 24 / 0.4)",
  },
}));

export const Header = styled("header")(({ theme }) => ({
  paddingBlock: theme.spacing(3),
  display: "flex",
  justifyContent: "space-between",

  [`& .${boxClasses.root}`]: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
  },
}));

export const Footer = styled("footer")(({ theme }) => ({
  paddingBlock: theme.spacing(3),
  textAlign: "center",
}));

export const BackgroundImage = styled("div")(({ theme }) => ({
  height: "100%",
  position: "fixed",
  right: 0,
  top: 0,
  bottom: 0,
  left: 0,
  transition: "background-image 0.4s, left 0.4s !important",
  transitionDelay: "0.5s",
  backgroundColor: theme.palette.background.level1,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundImage:
    "url(https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",

  [theme.breakpoints.up("md")]: {
    left: "50vw",
  },
}));
