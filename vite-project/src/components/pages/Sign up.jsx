import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
const schema = z.object({
  email: z.string().min(3, { message: "Enter a valid email" }),
  User: z
    .string()
    .min(3, { message: "Username must be at least 8 characters long." }),
  Password: z.string().min(3, { message: "Enter a valid password" }),
});

const Sign = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  function submitForm({ Password, User }) {
    console.log(User, Password);
  }
  const submitLogin = async () => {
    try {
      setIsLoading(true);
      const response = await client.post("/api/user/signup");
      const data = response.data;
    } catch {
      console.log(errr);
    }
  };
  return (
    <section className=" text-white py-16 px-5 sm:px-0 lg:px-24 text-center mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 text-left">
          <div className="text-gray-700 space-y-4 text-base md:text-lg leading-relaxed">
            <form
              onSubmit={handleSubmit(submitForm)}
              className=" flex flex-col border rounded-md lg:w-96"
            >
              <h2 className="text-center mb-8 mt-5">Instagram</h2>
              <input
                {...register("email")}
                type="email"
                placeholder="Email"
                className=" border rounded-md px-2 py-2 mb-1.5 ml-2.5 mr-1.5 lg:w-72 lg:ml-12"
              />
              {errors.User && (
                <p className="text-red-500 text-sm">{errors.User.message}</p>
              )}
              <input
                {...register("User")}
                type="User"
                placeholder="User Name"
                className=" border rounded-md px-2 py-2 mb-1.5 ml-2.5 mr-1.5 lg:w-72 lg:ml-12"
              />
              {errors.User && (
                <p className="text-red-500 text-sm">{errors.User.message}</p>
              )}
              <input
                {...register("Password")}
                type="password"
                placeholder="Password"
                className=" border rounded-md px-2 py-2 mb-1.5 ml-2.5 mr-1.5 lg:w-72 lg:ml-12"
              />
              {errors.User && (
                <p className="text-red-500 text-sm">{errors.User.message}</p>
              )}
              <button
                onClick={submitLogin()}
                className="bg-blue-400 text-white px-2 py-2 rounded-md ml-1.5 mr-1.5 mb-1.5 cursor-pointer lg:w-72 lg:ml-12"
              >
                Log in
              </button>

              <div className="text-center mb-12 mt-12">
                <p>
                  Already have an account?
                  <Link className="text-blue-500">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sign;
