import * as Yup from "yup";
export const SignUpValidateSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Password required"),
  firstName: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long")
    .required("First Name required"),
  lastName: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long")
    .required("Last Name required"),
});

export const SignInValidateSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Password required"),
});

export const AddressValidateSchema = Yup.object().shape({
  address: Yup.string().required("Please Enter Your Address"),
  city: Yup.string().required("Please Enter Your city"),
  zip: Yup.number()
  .required("Please Enter Your Zip Code"),
  shippingCountry: Yup.string().required("Please Select Country"),
});
