import { boxClasses, styled, typographyClasses } from "@mui/joy";

export const PaymentInfo = styled("div")(({ theme }) => ({
	gridColumn: "1/2",
	gridRow: "4/-1",
	backgroundColor: theme.palette.background.level1,
	borderRadius: theme.radius.sm,
	padding: theme.spacing(1),

	[`& .${boxClasses.root}`]: {
		display: "flex",
		justifyContent: "space-between",
	},

	[`& .${typographyClasses.root}`]: {
		fontSize: theme.fontSize.sm,
		fontWeight: theme.fontWeight.lg,
	},
}));
