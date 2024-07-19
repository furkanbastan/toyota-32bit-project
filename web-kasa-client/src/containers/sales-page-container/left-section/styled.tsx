import {
  iconButtonClasses,
  boxClasses,
  inputClasses,
  typographyClasses,
  styled,
} from "@mui/joy";

export const LeftSection = styled("div")(({}) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "var(--sales-page-gap)",
  overflow: "hidden",
}));

export const Header = styled("div")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  alignItems: "center",
  justifyContent: "space-between",

  [`& .${inputClasses.root}`]: {
    fontSize: 20,
    fontWeight: theme.fontWeight.lg,
    flex: 1,
  },

  [theme.breakpoints.up("md")]: {
    [`&>.${iconButtonClasses.root}`]: {
      display: "none",
    },
  },
}));

export const Body = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.surface,
  color: theme.palette.neutral.softColor,
  overflow: "auto",
  borderRadius: theme.radius.md,
  height: "calc(100vh - 160px)",

  table: {
    "--TableCell-headBackground": "var(--joy-palette-background-level1)",
    "--Table-headerUnderlineThickness": "1px",
    "--TableRow-hoverBackground": "var(--joy-palette-background-level1)",
    "--TableCell-paddingY": "4px",
    "--TableCell-paddingX": "8px",
  },
}));

export const Footer = styled("div")(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(1.2),
  backgroundColor: theme.palette.neutral.softBg,
  borderRadius: theme.radius.md,

  [`& .${boxClasses.root}`]: {
    display: "flex",
    justifyContent: "space-between",

    "&>*:nth-of-type(2)": {
      fontWeight: theme.fontWeight.xl,
    },
  },

  [`& .${typographyClasses.root}`]: {
    color: theme.palette.neutral.softColor,
  },
}));
