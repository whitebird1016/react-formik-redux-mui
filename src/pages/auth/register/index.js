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
                  justifyContent="center"
                  mt={2}
                >
                  <Typography variant="h4"> {t("signtitle")}</Typography>
                </Box>
                <CardContent>
                  <Box display="flex" justifyContent="space-between">
                    <Box width="48%">
                      <TextField
                        error={Boolean(touched.firstName && errors.firstName)}
                        fullWidth
                        helperText={touched.firstName && errors.firstName}
                        label={t("firstname")}
                        margin="normal"
                        name="firstName"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.firstName}
                        variant="outlined"
                      />
                    </Box>
                    <Box width="48%">
                      <TextField
                        error={Boolean(touched.lastName && errors.lastName)}
                        fullWidth
                        helperText={touched.lastName && errors.lastName}
                        label={t("lastname")}
                        margin="normal"
                        name="lastName"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.lastName}
                        variant="outlined"
                      />
                    </Box>
                  </Box>
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
                    error={Boolean(touched.address1 && errors.address1)}
                    fullWidth
                    helperText={touched.address1 && errors.address1}
                    label={t("address1")}
                    margin="normal"
                    name="address1"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address1}
                    variant="outlined"
                    SelectProps={{ native: true }}
                  />
                  <TextField
                    error={Boolean(touched.address2 && errors.address2)}
                    fullWidth
                    helperText={touched.address2 && errors.address2}
                    label={t("address2")}
                    margin="normal"
                    name="address2"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address2}
                    variant="outlined"
                    SelectProps={{ native: true }}
                  />
                  <TextField
                    error={Boolean(touched.city && errors.city)}
                    fullWidth
                    helperText={touched.city && errors.city}
                    label={t("city")}
                    margin="normal"
                    name="city"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.city}
                    variant="outlined"
                    SelectProps={{ native: true }}
                  />
                  <TextField
                    error={Boolean(touched.state && errors.state)}
                    fullWidth
                    helperText={touched.state && errors.state}
                    label={t("state")}
                    margin="normal"
                    name="state"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.state}
                    variant="outlined"
                    SelectProps={{ native: true }}
                  />
                  <TextField
                    error={Boolean(touched.phonenumber && errors.phonenumber)}
                    fullWidth
                    placeholder="999-999-9999"
                    helperText={touched.phonenumber && errors.phonenumber}
                    label={t("phone")}
                    margin="normal"
                    name="phonenumber"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phonenumber}
                    variant="outlined"
                    SelectProps={{ native: true }}
                  />
                  <Box display="flex" justifyContent="space-between">
                    <Box width="48%">
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
                    </Box>
                    <Box width="48%">
                      <TextField
                        error={Boolean(
                          touched.confirmPassword && errors.confirmPassword
                        )}
                        fullWidth
                        helperText={
                          touched.confirmPassword && errors.confirmPassword
                        }
                        label={t("confirmpass")}
                        margin="normal"
                        name={t("confirmpass")}
                        onBlur={handleBlur}
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
                  Already have an account ?
                  <Link component={NavLink} to="/">
                    Sign In
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
