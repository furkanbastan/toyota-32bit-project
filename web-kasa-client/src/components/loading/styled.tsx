import { styled } from "@mui/joy";

export const Loading = styled("div")(({ theme }) => ({
	width: "100%",
	height: "100%",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: theme.palette.background.backdrop,
}));
