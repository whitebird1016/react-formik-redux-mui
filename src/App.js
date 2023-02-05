import "./App.css";
import { CssBaseline } from "@material-ui/core";
import Router from "./routes";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import { Provider } from "react-redux";
import { store, history } from "./store";
import { HistoryRouter } from "redux-first-history/rr6";
import "./config/i18n";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Provider store={store}>
      <HistoryRouter history={history}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router />
          <ToastContainer />
        </ThemeProvider>
      </HistoryRouter>
    </Provider>
  );
};

export default App;
