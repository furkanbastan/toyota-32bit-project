import {
  CssVarsProvider,
  CssBaseline,
  GlobalStyles,
  linkClasses,
} from "@mui/joy";

function StyleProvider({ children }: any) {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <GlobalStyles
        styles={(theme) => ({
          ":root": {
            "--Header-height": "52px",
            "--Sidebar-width": "220px",
            "--sales-page-gap": theme.spacing(2),

            [theme.breakpoints.up("md")]: {
              "--Header-height": "0px",
            },

            [theme.breakpoints.up("lg")]: {
              "--Sidebar-width": "240px",
            },
          },

          html: {
            overflow: "hidden",
          },

          [`a:not(.${linkClasses.root})`]: {
            color: "inherit",
            backgroundColor: "inherit",
            font: "inherit",
            textDecoration: "none",
          },
        })}
      />
      {children}
    </CssVarsProvider>
  );
}

export { StyleProvider };
