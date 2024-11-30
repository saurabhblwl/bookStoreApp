import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
// import axios from "axios";
// import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Data:", data); // Log the form data to the console

    const userInfo = {
      email: data.email,
      password: data.password,
    };

    // You can send this data to your backend here if necessary
    // Example:
    // try {
    //   const response = await axios.post('your-api-endpoint', userInfo);
    //   console.log(response);
    // } catch (error) {
    //   console.error('Login error:', error);
    // }
  };

  return (
    <div>
      {/* Modal Dialog */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Close button */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>

            <div className="mt-4 space-y-2">
              {/* Email Input */}
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 border rounded-md outline-none"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Password Input */}
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
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-200"
              >
                Login
              </button>
            </div>

            {/* Link to Signup */}
            <p className="mt-4">
              Not Registered?{" "}
              <Link
                to="/signup"
                className="underline text-blue-500 cursor-pointer"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Signup
              </Link>
            </p>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
