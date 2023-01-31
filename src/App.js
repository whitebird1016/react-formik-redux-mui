import "./App.css";
import { CssBaseline } from "@material-ui/core";
import Router from "./routes";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </>
  );
};

export default App;
