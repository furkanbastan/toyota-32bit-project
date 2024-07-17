import { iconButtonClasses, styled } from "@mui/joy";

export const PaginationSection = styled("div")(({ theme }) => ({
  display: "flex",
  paddingTop: theme.spacing(2),
  gap: theme.spacing(1),

  [`& .${iconButtonClasses.root}`]: {
    borderRadius: "50%",
  },
}));
