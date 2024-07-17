import { boxClasses, styled } from "@mui/joy";

export const ProductPageContainer = styled("div")(({ theme }) => ({
  [`& .${boxClasses.root}:nth-of-type(1)`]: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flewWrap: "wrap",
    gap: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));
