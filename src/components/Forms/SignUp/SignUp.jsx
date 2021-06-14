import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { SignUpValidateSchema } from "../../../helpers/yup";
import { Link, useHistory } from "react-router-dom";
import { signUp } from "../../../redux/actions/auth";
import Field, { LockIcon } from "../FormComponents/Field";

export const SignUp = () => {
  const { errorMessage } = useSelector((state) => state.auth);
  console.log(errorMessage);
  const dispatch = useDispatch();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: SignUpValidateSchema,
    onSubmit: (values) => {
      dispatch(signUp(values, history));
    },
  });

  return (
    <div className="grid place-items-center h-screen">
      <div className="w-96 border bg-white px-8 py-6">
        <h1 className="text-3xl font-normal">Sign-Up</h1>
        {errorMessage && <small className="text-red-600">{errorMessage}</small>}

        <form onSubmit={formik.handleSubmit} className="flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Field
              dot={true}
              error={formik.touched.firstName && formik.errors.firstName}
              label="First Name"
              name="firstName"
              onChange={formik.handleChange}
              type="text"
            />
            <Field
              dot={true}
              error={formik.touched?.lastName && formik.errors?.lastName}
              label="Last Name"
              name="lastName"
              onChange={formik.handleChange}
              type="text"
            />
          </div>
          <Field
            dot={true}
            error={formik.touched?.email && formik.errors?.email}
            label="Email"
            name="email"
            onChange={formik.handleChange}
            type="text"
          />
          <Field
            dot={true}
            error={formik.touched?.password && formik.errors?.password}
            icon={<LockIcon />}
            label="Password"
            name="password"
            onChange={formik.handleChange}
            type="password"
          />
          <button
            className=" bg-amazonYellow active:bg-gray-900 focus:outline-none rounded px-4 py-2 border-solid border-black border-0 mt-3"
            type="submit"
          >
            Create Account
          </button>
          <p className="mt-3">
            Already have an account?{" "}
            <Link to="/signin" className="text-blue-500">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
