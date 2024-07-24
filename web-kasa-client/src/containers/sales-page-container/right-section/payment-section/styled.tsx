import { boxClasses, styled } from "@mui/joy";

export const PaymentSection = styled("div")(({ theme }) => ({
	gridRow: "3/-1",
	gridColumn: "2/3",
	backgroundColor: theme.palette.background.surface,
	borderRadius: theme.radius.md,
	"--payment-gap": theme.spacing(0.7),
	padding: "var(--payment-gap)",
	display: "grid",
	gridTemplateColumns: "1fr 1fr",
	gridTemplateRows: "50px 50px 50px 100px",
	gap: "var(--payment-gap)",

	[`& .${boxClasses.root}`]: {
		display: "flex",
		gridColumn: "1/-1",
		gap: "var(--payment-gap)",

		"&>*": {
			flex: 1,
			fontSize: theme.fontSize.lg,
		},
	},
}));
