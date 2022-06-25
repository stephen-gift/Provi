import React, { useState } from "react";
import { Link } from "react-router-dom";
import providus from "../../assets/image2.png";
import eyeOn from "../../assets/eyeOn.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Signup = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const toggleConfirmPassword = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };

  const handleSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
  };

  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .trim()
      .required("Email is required")
      .email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .max(20, "Password must not exceed 20 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must contain at least 8 characters with Uppercase, Lowercase, Number and Special Character"
      ),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
  });

  return (
    <>
      <main className="bg-signup-image xl:w-screen xl:h-screen xl:bg-clip-border xl:flex xl:justify-center xl:items-center">
        <section className="xl:w-login-width h-auto bg-white rounded-md ">
          <div className="mt-10 flex items-center flex-col">
            <img src={providus} alt="logo" />
            <h3 className="font-bold text-xl text-center text-lblack mt-4 flex flex-wrap w-48">
              Sign Up to Providus Card Management
            </h3>
            <h6 className="text-lgray text-sm mt-5">
              Enter your email and password below
            </h6>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="flex flex-col">
              <label className="text-lgray text-xs font-bold mt-4 ml-8 uppercase">
                full name
              </label>
              <Field
                name="fullName"
                type="text"
                placeholder="Full Name"
                className="bg-ibgray w-10/12 ml-8 mt-2 rounded-md border border-bgray placeholder:opacity-50"
              />
              <ErrorMessage
                name="fullName"
                component="div"
                className="text-red-600 ml-8 text-sm"
              />

              <label className="text-lgray text-xs font-bold mt-4 ml-8 uppercase">
                email
              </label>
              <Field
                name="email"
                type="text"
                placeholder="Email Address"
                className="bg-ibgray w-10/12 ml-8 mt-2 rounded-md border border-bgray placeholder:opacity-50"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600 ml-8 text-sm"
              />

              <label className="text-lgray text-xs font-bold mt-4 ml-8 uppercase">
                password
              </label>
              <div className=" relative ">
                <Field
                  name="password"
                  type={passwordShown === false ? "password" : "text"}
                  placeholder="Password"
                  className="bg-ibgray w-10/12 ml-8  rounded-md border border-bgray placeholder:opacity-50 placeholder:text-xs mt-2"
                />

                <span className="text-2xl absolute top-4 right-12">
                  {passwordShown === false ? (
                    <img
                      src={eyeOn}
                      alt=""
                      className="h-6 w-6"
                      onClick={togglePassword}
                    />
                  ) : (
                    <AiFillEye onClick={togglePassword} />
                  )}
                </span>
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-600 ml-8 text-sm"
              />

              <label className="text-lgray text-xs font-bold mt-4 ml-8 uppercase">
                confirm password
              </label>
              <div className=" relative ">
                <Field
                  name="confirmPassword"
                  type={confirmPasswordShown === false ? "password" : "text"}
                  placeholder="Confirm Password"
                  className="bg-ibgray w-10/12 ml-8  rounded-md border border-bgray placeholder:opacity-50 placeholder:text-xs mt-2"
                />

                <span className="text-2xl absolute top-4 right-12">
                  {confirmPasswordShown === false ? (
                    <img
                      src={eyeOn}
                      alt=""
                      className="h-6 w-6"
                      onClick={toggleConfirmPassword}
                    />
                  ) : (
                    <AiFillEye onClick={toggleConfirmPassword} />
                  )}
                </span>
              </div>
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-600 ml-8 text-sm"
              />

              <button
                type="submit"
                className="mt-5 text-xs font-semibold bg-buyellow ml-8 h-10 rounded-md text-white w-10/12"
              >
                Sign Up
              </button>
            </Form>
          </Formik>

          <div className="mt-5 flex items-center flex-col mb-6">
            <small className="text-lgray text-sm">
              Already a user -
              <span className="text-gold pl-2">
                <Link to="/login">Click Here</Link>
              </span>
            </small>
          </div>
        </section>
      </main>
    </>
  );
};

export default Signup;
