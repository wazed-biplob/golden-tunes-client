import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
const Login = () => {
  const { signIn, googleSignIn, loading, setLoading } = useContext(AuthContext);

  const [show, setShow] = useState(false);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log(`from`, from);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(false);
  }, []);
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
    setLoading(true);
    signIn(data.email, data.password)
      .then(() => {
        navigate(from);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        let errorMsg = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMsg,
        });
      });
  };
  return (
    <>
      {loading ? (
        <div
          className="flex justify-center items-center"
          style={{ height: "100vh", width: "100vw" }}
        >
          <progress className="progress w-56"></progress>
        </div>
      ) : (
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
                    Don't have and Account? Sign Up
                    <Link to="/registration" style={{ color: "blue" }}>
                      <p className="inline"> Here</p>
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
      )}
    </>
  );
};

export default Login;
