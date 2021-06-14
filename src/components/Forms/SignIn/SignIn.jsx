import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../../redux/actions/auth";
import { SignInValidateSchema } from "../../../helpers/yup";
import { Link, useHistory } from "react-router-dom";
import Field, { LockIcon } from "../FormComponents/Field";

export const SignIn = () => {
  const { errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignInValidateSchema,
    onSubmit: (values) => {
      dispatch(signIn(values, history));
    },
  });

  return (
    <div className="grid place-items-center  h-screen">
      <div className="w-96 border bg-white px-8 py-6">
        <h1 className="text-3xl font-normal mb-2">Sign-In</h1>
        {errorMessage && <small className="text-red-600">{errorMessage}</small>}

        <form onSubmit={formik.handleSubmit} className="flex flex-col">
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
            Continue
          </button>
          <p className="mt-3">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500">
              Register Now
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};
export default SignIn;
