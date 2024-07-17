import { circularProgressClasses, linkClasses, styled } from "@mui/joy";

export const ProductTable = styled("div")(({ theme }) => ({
  borderRadius: theme.radius.sm,
  overflow: "auto",
  height: "calc(100vh - 200px)",
  backgroundColor: theme.palette.background.surface,
  border: "1px solid",
  borderColor: theme.palette.divider,
  position: "relative",

  table: {
    "--TableCell-headBackground": "var(--joy-palette-background-level1)",
    "--Table-headerUnderlineThickness": "1px",
    "--TableRow-hoverBackground": "var(--joy-palette-background-level1)",
    "--TableCell-paddingY": "4px",
    "--TableCell-paddingX": "8px",
  },

  [`& .${linkClasses.root}`]: {
    svg: {
      transition: "0.2s",
    },

    "&.rotate": {
      svg: {
        transform: "rotate(180deg)",
      },
    },
  },

  th: {
    padding: "12px 6px",
    width: 140,
  },

  "th:nth-of-type(1)": {
    textAlign: "center",
  },

  "th:nth-of-type(2)": {
    width: 120,
  },

  tbody: {
    "td:nth-of-type(1)": {
      textAlign: "center",
    },
  },

  [`& .${circularProgressClasses.root}`]: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },

  [theme.breakpoints.down("md")]: {
    height: "calc(100vh - 240px)",
  },
}));
