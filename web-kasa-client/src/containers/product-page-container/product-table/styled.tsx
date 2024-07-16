import { linkClasses, Sheet, styled } from "@mui/joy";

export const ProductTable = styled(Sheet)(({ theme }) => ({
  borderRadius: theme.radius.sm,
  overflow: "auto",
  height: "calc(100vh - 240px)",

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

  [theme.breakpoints.down("sm")]: {
    display: "none",
  },

  tbody: {
    "td:nth-of-type(1)": {
      textAlign: "center",
    },

    "td:last-child": {
      display: "flex",
      alignItems: "center",
    },
  },
}));
