import { useState } from "react";
import { client } from "../lib/index";
import Img from "../../assets/img/Group 91.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

const Login = () => {
  // const [jwt, setJwt] = useState();
  // const [isLoading, setIsLoading] = useState(false);
//  const[item, setItem] = useState()

  const { register, handleSubmit } = useForm();

  const submitLogin = async (formData) => {
    // setErrorMsg("");
    try {
      // setIsLoading(true);
      const response = await client.post("/api/user/login", {
        username: formData.User,
        password: formData.Password,
      });
          console.log(response.data);
          
          const access = response.data.accessToken
          const username = response.data.data.username
          localStorage.setItem("access", access)
          localStorage.setItem("username", username)
    
          
          alert("you are logged in")
          if (response.status === 200) {
          window.location.href = "/home";
    }
  } catch (error) {
      // setIsLoading(false);
      console.error("Login error:", error);
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
            <h2 className="text-center mb-8 mt-5 font-bold font-oswald text-2xl">
              Instagram
            </h2>

            <input
              {...register("User", { required: "User is required" })}
              type="text"
              placeholder="User Name"
              className="border rounded-md px-2 py-2 mb-2"
            />
            <input
              {...register("Password", { required: "Password is required" })}
              type="password"
              placeholder="Password"
              className="border rounded-md px-2 py-2 mb-2"
            />
            <button
              type="submit"
              className="bg-blue-400 text-white px-2 py-2 rounded-md mb-4 cursor-pointer"
          
            >
              {/* {isLoading ? "Loading..." : "Log in"} */}
              login
            </button>

            <p className="text-center">
              Dont have an account?
            <Link className="text-blue-600" to={"/signup"}>SingUp</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
