import { styled } from "@mui/joy";

export const RightSection = styled("div")(({ theme }) => ({
	flex: 1,
	height: "100%",
	display: "grid",
	gridTemplateColumns: "1fr 1fr",
	gridTemplateRows: "min-content 1fr 1fr",
	gap: "var(--sales-page-gap)",

	[theme.breakpoints.down("md")]: {
		display: "none",
	},
}));

export const MiniHeader = styled("div")(({}) => ({
	gridColumn: "1/-1",
}));
