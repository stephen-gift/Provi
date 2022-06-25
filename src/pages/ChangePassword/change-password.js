import { useFormik } from "formik";
import { string, object, ref } from "yup";
import logo from "../../assets/providuslogo.svg";

const passwordRule = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const schema = object().shape({
  password: string()
    .min(5)
    .matches(passwordRule, { message: "Please create a stronger password" })
    .required("Password Required"),
  passwordConfirmation: string()
    .oneOf([ref("password"), null], "Passwords must match")
    .required("Password Confirmation is Required"),
});

const ChangePassword = () => {
  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      password: "",
      passwordConfirmation: "",
    },
    validateOnBlur: true,
    enableReinitialize: true,
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

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
              Create New Password
            </h3>
            <div className="my-6">
              <p className="text-xl font-bold text-textc my-1 w-8/12 mx-auto">
                You new password must be different from your previously used
                password
              </p>
            </div>
          </div>
          <div className="flex flex-col w-10/12 mx-auto">
            <input
              id="password"
              className={`${
                errors.password && touched.password ? "border-error " : ""
              } rounded-md focus:outline-none focus:border-buyellow focus:ring-1 focus:ring-buyellow bg-white border-bgray py-4 px-4
              } `}
              type="password"
              placeholder="New Password"
              onChange={handleChange}
              value={values.password}
            />
            {errors.password && touched.password && (
              <p className="text-sm mt-2 text-left text-error">
                {errors.password}
              </p>
            )}
            <input
              id="passwordConfirmation"
              className={`${
                errors.passwordConfirmation && touched.passwordConfirmation
                  ? "border-error "
                  : ""
              } rounded-md focus:outline-none  mt-6 focus:border-buyellow focus:ring-1 focus:ring-buyellow bg-white border-bgray py-4 px-4
              } `}
              type="password"
              placeholder="Confirm New Password"
              onChange={handleChange}
              value={values.passwordConfirmation}
            />
            {errors.passwordConfirmation && touched.passwordConfirmation && (
              <p className="text-sm mt-2 text-left text-error">
                {errors.passwordConfirmation}
              </p>
            )}
            <button
              className="w-full bg-buyellow text-white rounded-md shadow-lg my-10 p-4"
              type="submit"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
