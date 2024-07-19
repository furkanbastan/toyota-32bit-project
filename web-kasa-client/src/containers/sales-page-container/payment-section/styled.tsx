import { boxClasses, styled, typographyClasses } from "@mui/joy";

export const PaymentSection = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.surface,
  borderRadius: theme.radius.md,
  "--payment-gap": theme.spacing(0.7),
  padding: "var(--payment-gap)",
  display: "flex",
  flexDirection: "column",
  gap: "var(--payment-gap)",
  overflow: "hidden",
}));

export const PaymentInfo = styled("div")(({ theme }) => ({
  flex: 1,

  [`& .${boxClasses.root}`]: {
    display: "flex",
    justifyContent: "space-between",
  },

  [`& .${typographyClasses.root}`]: {
    fontSize: theme.fontSize.sm,
    fontWeight: theme.fontWeight.lg,
  },
}));

export const PaymentOptions = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "var(--payment-gap)",
}));

export const PaymentActions = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "2fr 3fr",
  gap: "var(--payment-gap)",
}));
