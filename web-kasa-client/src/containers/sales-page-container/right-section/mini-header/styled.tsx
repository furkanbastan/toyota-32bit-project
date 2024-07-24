import { inputClasses, styled } from "@mui/joy";

export const MiniHeader = styled("div")(({}) => ({
	gridColumn: "1/-1",
	display: "flex",
	gap: "var(--sales-page-gap)",

	[`& .${inputClasses.root}`]: {
		flex: 1,
	},
}));
