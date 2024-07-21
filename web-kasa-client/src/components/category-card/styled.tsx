import { styled } from "@mui/joy";

export const CategoryCard = styled("div")(({ theme }) => ({
	backgroundColor: theme.palette.neutral.softBg,
	color: theme.palette.neutral.softColor,
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	gap: theme.spacing(1),
	borderRadius: theme.radius.md,
	width: 120,
	height: 120,
	overflow: "hidden",
}));

export const CategoryImage = styled("img")(({ theme }) => ({
	width: 55,
	borderRadius: theme.radius.md,
}));
