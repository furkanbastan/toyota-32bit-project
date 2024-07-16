import { formControlClasses, inputClasses, styled } from "@mui/joy";

export const FilterSection = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  paddingBlock: theme.spacing(2),
  gap: theme.spacing(1.5),

  [`& .${formControlClasses.root}`]: {
    minWidth: 160,

    [theme.breakpoints.down("md")]: {
      minWidth: 120,
    },
  },

  [`& .${formControlClasses.root}:nth-of-type(1)`]: {
    flex: 1,
  },

  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const FilterSectionMobile = styled("div")(({ theme }) => ({
  display: "flex",
  marginBlock: theme.spacing(1),
  gap: theme.spacing(1),

  [`& .${inputClasses.root}:nth-of-type(1)`]: {
    flex: 1,
  },

  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
