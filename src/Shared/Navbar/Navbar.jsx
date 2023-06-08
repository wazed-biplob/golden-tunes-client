import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { getAuth } from "firebase/auth";
import app from "../../Firebase/firebase.config";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const auth = getAuth(app);
  const signOut = () => {
    logOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(user);
  const navLinks = (
    <>
      {" "}
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <a>Classes</a>
      </li>
      {user && (
        <li>
          <Link to="/dashboard">DashBoard</Link>
        </li>
      )}
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">GoldenTunes</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end flex gap-4">
          {user ? (
            <>
              <img
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                src={user?.photoURL}
                alt={user?.displayName}
              />
              <button onClick={signOut} className="btn btn-xs btn-secondary">
                Log Out
              </button>{" "}
            </>
          ) : (
            <>
              {" "}
              <Link to="/login">
                <button className="btn btn-xs btn-secondary">Sign in</button>
              </Link>
              <Link to="/registration">
                <button className="btn btn-xs btn-secondary">Sign Up</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
