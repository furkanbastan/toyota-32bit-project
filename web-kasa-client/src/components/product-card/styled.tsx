import { styled } from "@mui/joy";

export const ProductCard = styled("div")(({ theme }) => ({
	backgroundColor: theme.palette.background.level1,
	padding: theme.spacing(1),
	borderRadius: theme.radius.md,
	display: "flex",
	gap: theme.spacing(1),
}));

export const ImageWrapper = styled("div")(({}) => ({
	display: "flex",
	flexDirection: "column",
	gap: 0,
	alignItems: "center",
}));

export const ProductImage = styled("img")(({ theme }) => ({
	width: 55,
	height: 55,
	borderRadius: theme.radius.md,
}));

export const TitleWrapper = styled("div")(({}) => ({
	display: "flex",
	flexDirection: "column",
}));
