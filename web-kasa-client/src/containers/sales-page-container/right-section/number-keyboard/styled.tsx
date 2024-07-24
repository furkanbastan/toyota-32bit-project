import { boxClasses, styled } from "@mui/joy";

export const NumberKeyboard = styled("div")(({ theme }) => ({
	gridColumn: "2/3",
	gridRow: "2/3",
	display: "grid",
	gridTemplateColumns: "1fr 1fr 1fr",
	"--gap": theme.spacing(0.5),
	gap: "var(--gap)",

	[`&>.${boxClasses.root}`]: {
		gridColumn: "1/-1",
		display: "grid",
		gridTemplateColumns: "1fr 1fr",
		gap: "var(--gap)",
	},
}));
