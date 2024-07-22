import { styled } from "@mui/joy";

export const CategoryList = styled("nav")(({ theme }) => ({
	display: "grid",
	gridTemplateColumns: "1fr 1fr",
	gap: theme.spacing(2),
	paddingBlock: theme.spacing(2),
}));

export const CategoryItem = styled("div")(({}) => ({
	alignSelf: "center",
	justifySelf: "center",
	cursor: "pointer",
}));

export const ProductList = styled("nav")(({ theme }) => ({
	padding: theme.spacing(2),
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(2),
}));

export const ProductItem = styled("div")(({}) => ({
	cursor: "pointer",
}));
