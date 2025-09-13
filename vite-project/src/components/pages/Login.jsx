import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { client } from "../lib/index";
import Img from "../../assets/img/Group 91.png";

const Login = () => {
  const [jwt, setJwt] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitLogin = async (formData) => {
    setErrorMsg("");
    try {
      setIsLoading(true);
      const response = await client.get("/api/user/login", {
        username: formData.User,
        password: formData.Password,
      });
      setJwt(response.data);
      setIsLoading(false);
      console.log("Login successful:", response.data);
    } catch (err) {
      setIsLoading(false);
      console.error("Login error:", err);
      setErrorMsg(
        "Cannot reach server. Please check your connection or backend."
      );
    }
  };

  return (
    <section className="text-black py-16 px-5 sm:px-0 lg:px-24 text-center mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={Img} alt="Illustration" className="max-w-xs md:max-w-sm" />
        </div>
        <div className="w-full md:w-1/2 text-left">
          <form
            onSubmit={handleSubmit(submitLogin)}
            className="flex flex-col border rounded-md lg:w-96 p-4"
          >
            <h2 className="text-center mb-8 mt-5 text-2xl font-bold">
              Instagram
            </h2>

            <input
              {...register("User", { required: "User is required" })}
              type="text"
              placeholder="User Name"
              className="border rounded-md px-2 py-2 mb-2"
            />
            {errors.User && (
              <p className="text-red-500 text-sm mb-2">{errors.User.message}</p>
            )}

            <input
              {...register("Password", { required: "Password is required" })}
              type="password"
              placeholder="Password"
              className="border rounded-md px-2 py-2 mb-2"
            />
            {errors.Password && (
              <p className="text-red-500 text-sm mb-2">
                {errors.Password.message}
              </p>
            )}

            {errorMsg && (
              <p className="text-red-500 text-center mb-2">{errorMsg}</p>
            )}

            <button
              type="submit"
              className="bg-blue-400 text-white px-2 py-2 rounded-md mb-4 cursor-pointer"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Log in"}
            </button>

            <p className="text-center">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-blue-500">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
