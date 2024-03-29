import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { getAuth } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import "./Navbar.css";
import { FcHome } from "react-icons/fc";
import { MdPeopleAlt, MdDashboard } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import Toggle from "react-toggle";
import { VarContext } from "../../Providers/VarsProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { mode, setMode } = useContext(VarContext);
  const auth = getAuth(app);
  const signOut = () => {
    logOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = (
    <>
      <li>
        <Link to="/">
          <FcHome style={{ fontSize: "26px" }} />
          Home
        </Link>
      </li>
      <li>
        <Link to="/instructors">
          <MdPeopleAlt style={{ fontSize: "26px" }} /> Instructors
        </Link>
      </li>
      <li>
        <Link to="/class">
          <FaGraduationCap style={{ fontSize: "26px" }} />
          Classes
        </Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard">
            <MdDashboard style={{ color: "lightblue", fontSize: "26px" }} />
            DashBoard
          </Link>
        </li>
      )}
    </>
  );
  return (
    <>
      <div
        data-theme={mode ? "dark" : "light"}
        className="navbar px-4 bg-base-100"
      >
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
          <Link
            to="/"
            className="normal-case text-xl font-extrabold flex gap-x-2"
          >
            <img
              style={{ width: "40px", height: "40px" }}
              src="https://i.ibb.co/CpcMS4d/logo-golden-tunes.jpg"
              alt="logo"
            />
            <span className="brand-name">
              <span style={{ color: "#FFD700" }}>Golden</span>Tunes
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end flex gap-4">
          <label>
            <Toggle icons={false} onChange={() => setMode(!mode)} />
          </label>
          {user ? (
            <>
              <img
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                src={user?.photoURL}
                alt={user?.displayName}
              />
              <button
                onClick={signOut}
                className="btn btn-xs btn-info text-white"
              >
                Log Out
              </button>{" "}
            </>
          ) : (
            <>
              {" "}
              <Link to="/login">
                <button className="btn-signin btn btn-xs btn-info text-white">
                  Sign in
                </button>
              </Link>
              <Link to="/registration">
                <button className="btn btn-xs btn-info text-white">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
