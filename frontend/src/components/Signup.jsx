import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("signup successful");
          navigate(from, { replace: true });
        }
        localStorage.setItem("users", JSON.stringify(res.data.user));
      })
      .catch((error) => {
        if (error.response) {
          console.log(error);
          toast.error("errror :" + error.response.data.message);
        }
      });

    // Add logic for submitting the user data to the backend here
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close Modal Button */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Signup</h3>

            {/* Name Field */}
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Full Name"
                className="w-80 px-3 border rounded-md outline-none"
                {...register("fullname", { required: "Name is required" })}
              />
              {errors.fullname && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 border rounded-md outline-none"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 border rounded-md outline-none"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-between items-center mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-200"
              >
                Signup
              </button>
            </div>

            {/* Link to Login page */}
            <p className="mt-4 text-xl">
              Have an Account?{" "}
              <button
                className="underline text-blue-500 cursor-pointer"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </button>
              {""}
              <Login />
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
