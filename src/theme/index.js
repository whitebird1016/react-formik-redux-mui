import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0096c7",
    },
    secondary: {
      main: "#a0b9c8",
    },
    success: {
      main: "#06d6a0",
    },
    info: {
      main: "#2196f3",
    },
    warning: {
      main: "#ffd166",
    },
    error: {
      main: "#ef476f",
    },
  },
  typography: {
    fontFamily: "'Josefin Sans', sans-serif;",
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
    overline: {
      fontWeight: 500,
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          fontFamily: "'Josefin Sans', sans-serif;",
        },
      },
    },
    MuiButton: {
      root: {
        textTransform: "capitalize",
      },
    },
  },
});

export default theme;
