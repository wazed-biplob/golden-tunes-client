import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProviders";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const from = location.state?.from.pathname || "/";
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then(() => {
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
        alert(`Error :`, error.message);
      });
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                  {...register("email")}
                />
                {errors.email?.type === "required" && (
                  <p role="alert">Error : email is required</p>
                )}
              </div>
              <div className="form-control">
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                />
                {errors.password?.type === "required" && (
                  <p role="alert">Error : password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p role="alert">Error : More than 6 char required</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p role="alert">Error : Less than 20 char required</p>
                )}
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-glass">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
