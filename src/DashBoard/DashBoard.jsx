import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import useUserRole from "../Hooks/useUserRole";
import { AuthContext } from "../Providers/AuthProviders";

const DashBoard = () => {
  const [userRole] = useUserRole();
  const dashboardLinks = (
    <>
      {userRole === "admin" ? (
        <>
          {" "}
          <li>
            <Link to="/">Home</Link>
            <Link to="adminhome">Admin Home</Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link to="manageclasses">Manage Classes</Link>
          </li>
          <li>
            <Link to="manageusers">Manage Users</Link>
          </li>
        </>
      ) : userRole === "instructor" ? (
        <>
          <li>
            <Link to="/">Home</Link>
            <Link to="main">Instructor DashBoard</Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link to="addaclass">Add A Class</Link>
          </li>
          <li>
            <Link to="myclasses">My Classes</Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/">Home</Link>
            <Link to="adminhome">User Home</Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link to="manageclasses">Manage Classes</Link>
          </li>
          <li>
            <Link to="manageusers">Manage Users</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {dashboardLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
