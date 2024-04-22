import React, { useState } from "react";
import "../button.css";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import signupschema from "../validations/Signupvalidations";
import { signupapi } from "../Api/Userapi";
import Navbar from "../Navbar";
import { Link } from 'react-router-dom';


function Usersignup() {
  const navigate = useNavigate();

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
        conformpassword: "",
      },
      validationSchema: signupschema,

      onSubmit,
    });

  async function onSubmit() {
    try {
      const res = await signupapi(values);
      if (res?.status === 201) {
        const userid=res?.data?.userid;
        navigate("/User/otp",{state:{'userid':userid}});
        console.log("success");
      }
    } catch (error) {
      console.log("error");
    }
  }
  return (
    <>
    <Navbar/>

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://www.svgrepo.com/show/499962/music.svg"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className=" mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="username"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.username && touched.username && (
                  <p className="text-red-600">{errors.username}</p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.email && touched.email && (
                  <p className="text-red-600">{errors.email}</p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.password && touched.password && (
                  <p className="text-red-600">{errors.password}</p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="conformpassword"
                  name="conformpassword"
                  type="password"
                  value={values.conformpassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="conformpassword"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.conformpassword && touched.conformpassword && (
                  <p className="text-red-600">{errors.conformpassword}</p>
                )}
              </div>
            </div>

            <div>
            <button className="button2" type="submit">signup</button>
            </div>
          </form>
        <Link to="/user/login" className="text-xs text-black uppercase">i have  alredy account</Link>
        </div>
      </div>
    </>
  );
}

export default Usersignup;
