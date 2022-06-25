import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { string, object } from "yup";
import logo from "../../assets/providuslogo.svg";

const schema = object().shape({
  email: string()
    .trim()
    .required("Email is required")
    .email("Email is invalid"),
});

const ForgotPassword = () => {
  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      email: "",
    },
    validateOnBlur: true,
    enableReinitialize: true,
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(errors);
  return (
    <div className="w-11/12 mx-auto">
      <header className="flex items-center my-14 ">
        <img className="w-10" src={logo} alt="providus-logo" />
        <p className="text-metallicSilver ml-2 font-bold font-mulish text-2xl">
          Providus BCM
        </p>
      </header>
      <div className="my-10 flex items-center justify-center text-center flex-col">
        <form onSubmit={handleSubmit}>
          <div className="my-14">
            <h3 className="text-buyellow font-bold text-2xl my-2">
              Password assistance
            </h3>
            <div className="my-6">
              <p className="text-xl text-textc my-1 font-bold">
                Please enter the e-mail address associated with your Providus
                account.
              </p>
              <p className="text-xl text-textc font-bold">
                We will send you a link to this e-mail address to reset your
                password.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-10/12 mx-auto">
            <input
              id="email"
              className={`${
                errors.email && touched.email ? "border-error " : ""
              } rounded-md focus:outline-none focus:border-buyellow focus:ring-1 focus:ring-buyellow bg-white border-bgray py-4 px-4
              } `}
              type="text"
              placeholder="Email Address"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && touched.email && (
              <p className="text-sm mt-2 text-left text-error">
                {errors.email}
              </p>
            )}
            <button
              className="w-full bg-buyellow text-white rounded-md shadow-lg my-5 p-3"
              type="submit"
            >
              Reset Password
            </button>
          </div>
        </form>

        <Link
          to="/login"
          className="uppercase cursor-pointer text-buyellow my-10  border-buyellow border-b-2"
        >
          Return to login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
