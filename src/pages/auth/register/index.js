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

const Register = () => {
  const handleSubmit = () => {
    console.log("s");
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
                  <Typography variant="h4">Create Account</Typography>
                </Box>
                <CardContent>
                  <Box display="flex" justifyContent="space-between">
                    <Box width="48%">
                      <TextField
                        error={Boolean(touched.firstName && errors.firstName)}
                        fullWidth
                        helperText={touched.firstName && errors.firstName}
                        label="First name"
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
                        label="Last name"
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
                    label="Email"
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
                    label="Address1"
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
                    label="Address2"
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
                    label="City"
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
                    label="State"
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
                    helperText={touched.phonenumber && errors.phonenumber}
                    label="Phone"
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
                        label="Password"
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
                        label="Confirm Password"
                        margin="normal"
                        name="confirmPassword"
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
                      Create Account
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
