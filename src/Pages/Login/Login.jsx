import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
// TODO : HIDE/UNHIDE PASS
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [show, setShow] = useState(true);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log(`from`, from);
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
                  type={show ? "text" : "password"}
                  placeholder="Password"
                  className="input input-bordered"
                  required
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                />
                {
                  <button
                    onClick={(e) => {
                      setShow(!show);
                      e.preventDefault;
                    }}
                    className="btn btn-primary btn-xs mt-2"
                    type="button"
                  >
                    {show ? "Hide" : "Show"}
                  </button>
                }
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
              <label className="label">
                <span className="label-text-alt">
                  Don't have and Account? Sign Up{" "}
                  <Link to="/registration" style={{ color: "blue" }}>
                    Here
                  </Link>
                </span>
              </label>
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
