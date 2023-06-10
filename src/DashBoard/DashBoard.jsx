import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import useUserRole from "../Hooks/useUserRole";
import { AuthContext } from "../Providers/AuthProviders";

const DashBoard = () => {
  const [userRole] = useUserRole();
  const { user } = useContext(AuthContext);
  const dashboardLinks = (
    <>
      {userRole === "admin" ? (
        <>
          {" "}
          <li>
            <Link to="/">Home</Link>
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
          </li>
          <div className="divider"></div>
          <li>
            <Link to="selected-classes">My Selected Classes</Link>
          </li>
          <li>
            <Link to="enrolled-classes">My Enrolled Classes</Link>
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
          <h1>Welcome {user?.displayName}</h1>
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
          <ul className="menu p-4 w-80 h-full bg-slate-200 bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {dashboardLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
