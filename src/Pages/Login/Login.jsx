import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log(`from`, from);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const user = {
          name: res.user.displayName,
          email: res.user.email,
          role: "student",
          image: res.user.photoURL,
        };

        fetch("https://golden-tunes-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then(() => {});
        navigate(from);
      })

      .catch((e) => console.log(e));
  };
  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then(() => {
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
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
                  <span onClick={() => setShow(!show)}>
                    {show ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </span>
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
              <div className="form-control mt-2">
                <button className="btn btn-info text-white">Sign In</button>
              </div>
              <div className="mx-auto mt-4">
                <FcGoogle
                  onClick={handleGoogleSignIn}
                  type="button"
                  style={{ fontSize: "28px", cursor: "pointer" }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
