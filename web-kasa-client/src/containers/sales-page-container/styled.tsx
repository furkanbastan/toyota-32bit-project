import { styled } from "@mui/joy";

export const SalesPageContainer = styled("div")(({}) => ({
	width: "min(1500px, 100%)",
	marginInline: "auto",
	height: "100vh",
	display: "flex",
	gap: "var(--sales-page-gap)",
	padding: "var(--sales-page-gap)",
}));
