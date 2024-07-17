import { formControlClasses, styled } from "@mui/joy";

export const FilterSection = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  paddingBlock: theme.spacing(2),
  gap: theme.spacing(1.5),

  [`& .${formControlClasses.root}:nth-of-type(1)`]: {
    flex: 1,
  },
}));
