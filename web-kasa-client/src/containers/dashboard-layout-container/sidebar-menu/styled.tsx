import {
  boxClasses,
  cardClasses,
  listClasses,
  listItemButtonClasses,
  listItemClasses,
  styled,
  typographyClasses,
} from "@mui/joy";

export const SidebarMenu = styled("div")(({ theme }) => ({
  inHeight: 0,
  overflow: "hidden auto",
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",

  [`& .${listClasses.root}`]: {
    "--ListItem-radius": theme.radius.sm,
    gap: theme.spacing(1),
  },

  [`& .${listItemClasses.root}`]: {
    a: {
      flex: 1,
    },
  },

  [`& .${listItemButtonClasses.root}`]: {
    gap: theme.spacing(1.5),
  },

  [`& .${cardClasses.root}:nth-of-type(2)`]: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing(1),
  },

  [`& .${cardClasses.root} .${boxClasses.root}`]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  [`& .${cardClasses.root} .${typographyClasses.root}`]: {
    fontSize: theme.fontSize.sm,
    lineHeight: 1,

    "&:nth-of-type(2)": {
      fontWeight: theme.fontWeight.lg,
    },
  },
}));
