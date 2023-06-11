import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../Firebase/firebase.config";

const Registration = () => {
  const { createUser, logOut } = useContext(AuthContext);
  const auth = getAuth(app);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.password !== data.c_password) {
      alert(`password doesn't match!`);
      return;
    }
    createUser(data.email, data.password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: data.name,
          photoURL: data.photo,
        }).then(() => {
          const users = {
            name: data.name,
            email: data.email,
            role: "student",
            image: data.photo,
          };
          fetch("https://golden-tunes-server.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(users),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                alert("Signed Up as Students");
              }
            });
        });

        logOut()
          .then(() => {})
          .catch((error) => console.log(error));

        reset();
        navigate("/login");
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
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                  {...register("name")}
                />{" "}
                {errors.name?.type === "required" && (
                  <p role="alert">Error : Name is required</p>
                )}
              </div>
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
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
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
                {errors.password?.type === "pattern" && (
                  <p role="alert">
                    At Least one capital and small letter, one Special Char and
                    a number required.
                  </p>
                )}
              </div>
              <div className="form-control">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="input input-bordered"
                  required
                  {...register("c_password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                />
                {errors.c_password?.type === "required" && (
                  <p role="alert">Error : password is required</p>
                )}
                {errors.c_password?.type === "minLength" && (
                  <p role="alert">Error : More than 6 char required</p>
                )}
                {errors.c_password?.type === "maxLength" && (
                  <p role="alert">Error : Less than 20 char required</p>
                )}
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  {...register("photo")}
                  required
                />
                <label className="label">
                  <span className="label-text-alt">
                    Already Registered? Sign In{" "}
                    <Link to="/login" style={{ color: "blue" }}>
                      Here
                    </Link>
                  </span>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-glass">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
