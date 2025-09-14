import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { client } from "../lib";
import { useForm } from "react-hook-form";


const schema = z.object({
  email: z.string({ message: "Enter a valid email" }),
  username: z.string().min(3, { message: "Username must be at least 3 characters long." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long." }),
});

export default function SignUp (){
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const submitForm = async () => {
    try {
      setIsLoading(true);
      const { email, User, Password } = getValues();

      const response = await client.post("api/user/signup", {
        email: email,
        username: User,
        password: Password,
      });

      const data = response.data;
      if (data.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
        console.log("Token saved:", data.accessToken);
      }

      setIsLoading(false);
      alert("Signup successful!");
      if (response.status === 201) {
          window.location.href = "/login";}
    } catch (err) {
      console.error("Signup error:", err);
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-10 px-4 sm:px-6 lg:px-24 text-black">
      <div className="flex flex-col items-center gap-10 w-full max-w-5xl">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center"></div>
        <div className="w-full md:w-1/2">
          <form
            onSubmit={handleSubmit(submitForm)}
            className="flex flex-col bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto"
          >
            <h2 className="text-center text-3xl font-bold mb-6">Instagram</h2>

            <input
            {...register("email")}
             type="email" 
              placeholder="Email"
              className="border rounded-md px-3 py-2 mb-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mb-2">
                {errors.email.message}
              </p>
            )}

            <input
              {...register("username")}
              type="text"
              placeholder="username"
              className="border rounded-md px-3 py-2 mb-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mb-2">{errors.username.message}</p>
            )}

            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="border rounded-md px-3 py-2 mb-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mb-2">
                {errors.password.message}
              </p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-500 text-white py-2 rounded-md w-full mb-4 hover:bg-blue-600 transition"
            >
              {isLoading ? "Loading..." : "Sign Up"}
            </button>

            <p className="text-center text-gray-600">
              Already have an account?{" "}
            <Link to={"/login"} className="text-blue-600">
              login
            </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};


