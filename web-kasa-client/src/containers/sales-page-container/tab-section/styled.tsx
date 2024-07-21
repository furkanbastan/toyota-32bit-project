import {
	styled,
	tabClasses,
	tabListClasses,
	tabPanelClasses,
	tabsClasses,
} from "@mui/joy";

export const TabSection = styled("div")(({ theme }) => ({
	gridRow: "2/4",
	backgroundColor: theme.palette.background.surface,
	borderRadius: theme.radius.md,
	overflow: "hidden",

	[`& .${tabsClasses.root}`]: {
		height: "100%",
	},

	[`& .${tabListClasses.root}`]: {
		display: "flex",
	},

	[`& .${tabClasses.root}`]: {
		flex: 1,
	},

	[`& .${tabPanelClasses.root}`]: {
		padding: 0,
	},
}));
