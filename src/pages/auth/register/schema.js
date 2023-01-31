import * as Yup from "yup";

const equalTo = (ref, msg) => {
  return Yup.mixed().test({
    name: "equalTo",
    exclusive: false,
    message: msg,
    params: {
      reference: ref.path,
    },
    test: function (value) {
      return value === this.resolve(ref);
    },
  });
};
Yup.addMethod(Yup.string, "equalTo", equalTo);

export default Yup.object().shape({
  firstName: Yup.string().max(255).required("First name is required"),
  lastName: Yup.string().max(255).required("Last name is required"),
  email: Yup.string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
  address1: Yup.string().required("Address1 is required"),
  address2: Yup.string().required("Address2 is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  phonenumber: Yup.string().required("Phone is required"),
  password: Yup.string().max(255).required("Password is required"),
  confirmPassword: Yup.string()
    .max(255)
    .equalTo(Yup.ref("password"), "Password must be matched"),
});
