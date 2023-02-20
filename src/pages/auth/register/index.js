import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import { Formik } from "formik";
import { NavLink } from "react-router-dom";
import validationSchema from "./schema";
import { useDispatch } from "react-redux";
import { signup } from "../../../actions/auth";
// const PHONE_REGEX = new RegExp(/"^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"/gmi);
import { useTranslation } from "react-i18next";

const Register = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    await dispatch(
      signup({
        firstname: values.firstName,
        lastname: values.lastName,
        email: values.email,
        address1: values.address1,
        address2: values.address2,
        city: values.city,
        state: values.state,
        phone: values.phonenumber,
        password: values.password,
      })
    );
  };
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" mt={4}>
      <Container maxWidth="sm">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            address1: "",
            address2: "",
            city: "",
            state: "",
            phonenumber: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleSubmit, isSubmitting, values }) => (
            <form onSubmit={handleSubmit}>
              <Card>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  mt={2}
                >
                  <Typography variant="h4"> {t("signtitle")}</Typography>
                </Box>
                <CardContent>
                  <Box display="flex" justifyContent="space-between">
                    <Box width="48%">
                      <TextField
                        fullWidth
                        label={t("firstname")}
                        margin="normal"
                        name="firstName"
                        onChange={handleChange}
                        value={values.firstName}
                        variant="outlined"
                      />
                    </Box>
                    <Box width="48%">
                      <TextField
                        fullWidth
                        label={t("lastname")}
                        margin="normal"
                        name="lastName"
                        onChange={handleChange}
                        value={values.lastName}
                        variant="outlined"
                      />
                    </Box>
                  </Box>
                  <TextField
                    fullWidth
                    label={t("email")}
                    margin="normal"
                    name="email"
                    onChange={handleChange}
                    type="email"
                    value={values.email}
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    label={t("address1")}
                    margin="normal"
                    name="address1"
                    onChange={handleChange}
                    value={values.address1}
                    variant="outlined"
                    SelectProps={{ native: true }}
                  />
                  <TextField
                    fullWidth
                    label={t("address2")}
                    margin="normal"
                    name="address2"
                    onChange={handleChange}
                    value={values.address2}
                    variant="outlined"
                    SelectProps={{ native: true }}
                  />
                  <TextField
                    fullWidth
                    label={t("city")}
                    margin="normal"
                    name="city"
                    onChange={handleChange}
                    value={values.city}
                    variant="outlined"
                    SelectProps={{ native: true }}
                  />
                  <TextField
                    fullWidth
                    label={t("state")}
                    margin="normal"
                    name="state"
                    onChange={handleChange}
                    value={values.state}
                    variant="outlined"
                    SelectProps={{ native: true }}
                  />
                  <TextField
                    fullWidth
                    placeholder="999-999-9999"
                    label={t("phone")}
                    margin="normal"
                    name="phonenumber"
                    onChange={handleChange}
                    value={values.phonenumber}
                    variant="outlined"
                    SelectProps={{ native: true }}
                  />
                  <Box display="flex" justifyContent="space-between">
                    <Box width="48%">
                      <TextField
                        fullWidth
                        label={t("password")}
                        margin="normal"
                        name="password"
                        onChange={handleChange}
                        type="password"
                        value={values.password}
                        variant="outlined"
                      />
                    </Box>
                    <Box width="48%">
                      <TextField
                        fullWidth
                        label={t("confirmpass")}
                        margin="normal"
                        name="confirmPassword"
                        onChange={handleChange}
                        type="password"
                        value={values.confirmPassword}
                        variant="outlined"
                      />
                    </Box>
                  </Box>
                  <Box my={2}>
                    <Button
                      color="primary"
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      {t("signtitle")}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
              <Box mt={5} textAlign="center">
                <Typography variant="body1">
                  {t("footertext")}
                  <Link component={NavLink} to="/">
                    {t("button")}
                  </Link>
                </Typography>
              </Box>
            </form>
          )}
        </Formik>
      </Container>
    </Box>
  );
};
export default Register;
