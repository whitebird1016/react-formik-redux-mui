import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Link,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { Formik } from "formik";
import { NavLink } from "react-router-dom";
import validationSchema from "./schema";
import { login } from "../../../actions/auth";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState();

  const LanguageChoose = (e) => {
    let language = e.target.value;
    switch (language) {
      case "english":
        setLang("english");
        language = "English";
        break;
      case "spanish":
        setLang("spanish");
        language = "Spanish";
        break;
      default:
        break;
    }
    i18n.changeLanguage(language);
  };
  const handleSubmit = async (values) => {
    await dispatch(
      login({
        email: values.email,
        password: values.password,
      })
    );
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100vh"
      justifyContent="center"
      mt={-4}
    >
      <Container maxWidth="sm">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values,
          }) => (
            <form onSubmit={handleSubmit}>
              <Card>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  mt={2}
                  mx="auto"
                  width="100%"
                >
                  <Typography variant="h4">{t("welcome")}</Typography>
                  <Box mt={2}>
                    <Typography variant="body1">{t("title")}</Typography>
                  </Box>
                </Box>
                <CardContent>
                  <TextField
                    error={Boolean(touched.email && errors.email)}
                    fullWidth
                    helperText={touched.email && errors.email}
                    label={t("email")}
                    margin="normal"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="email"
                    value={values.email}
                    variant="outlined"
                  />
                  <TextField
                    error={Boolean(touched.password && errors.password)}
                    fullWidth
                    helperText={touched.password && errors.password}
                    label={t("password")}
                    margin="normal"
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    value={values.password}
                    variant="outlined"
                  />
                  <Box my={2}>
                    <Button
                      color="primary"
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      {t("button")}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
              <Box mt={5} textAlign="center">
                <Typography variant="body1">
                  {t("text")}
                  <Link component={NavLink} to="/register">
                    Create one here
                  </Link>
                </Typography>
              </Box>
            </form>
          )}
        </Formik>
      </Container>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select Language</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={lang}
            onChange={LanguageChoose}
          >
            <MenuItem value="english">English</MenuItem>
            <MenuItem value="spanish">Spanish</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};
export default Login;
