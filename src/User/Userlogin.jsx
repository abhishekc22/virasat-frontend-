import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/images/login.jpg";
import { useFormik } from "formik";
import loginschema from "../validations/Loginvalidation";
import { loginapi } from "../Api/Userapi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../Reduxstore/Userslice";

function Userlogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { values, touched, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginschema,

    onSubmit: async () => {
      try {
        const res = await loginapi(values);
        if (res.status === 200) {
          const { access, username, userid ,refresh} = res.data;
          localStorage.setItem("userAccessToken", access);
          localStorage.setItem("userRefreshToken", refresh);
          console.log('Access Token stored in local storage');
          dispatch(
            userLogin({
              token: access,
              userid: userid,
              username: username,
            })
          );
          navigate("/User/userhome");
        } else {
          console.log('Error: Status is not 200');
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });

  
  return (
    <>
      <Navbar />
      <div className="py-16 bg-white">
        <div className="flex bg-white rounded-lg border border-black shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div
            className="hidden lg:block lg:w-1/2 bg-cover"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
          <div className="w-full p-8 lg:w-1/2">
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl font-semibold text-gray-700 text-center">
                Brand
              </h2>
              <p className="text-xl text-gray-600 text-center">
                Welcome to Virasat
              </p>
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="email"
                />
                {errors.email && touched.email && (
                  <div className="text-red-500">{errors.email}</div>
                )}
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Password
                  </label>
                  <a href="#" className="text-xs text-gray-500">
                    Forget Password?
                  </a>
                </div>
                <input
                  id="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="password"
                  autoComplete="current-password" 
                />
                {errors.password && touched.password && (
                  <div className="text-red-500">{errors.password}</div>
                )}
              </div>
              <div className="mt-8">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <Link
                to="/user/signup"
                className="text-xs text-gray-500 uppercase"
              >
                or sign up
              </Link>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Userlogin;
