import { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import useUserRole from "../Hooks/useUserRole";
import { AuthContext } from "../Providers/AuthProviders";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FcHome, FcInfo, FcPaid, FcProcess } from "react-icons/fc";
import { SiAddthis } from "react-icons/si";
import { FcGraduationCap } from "react-icons/fc";
import { RiUserSearchLine } from "react-icons/ri";
import { LuLogOut } from "react-icons/lu";
const DashBoard = () => {
  const [userRole] = useUserRole();
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
    navigate("/");
  };
  const dashboardLinks = (
    <>
      {userRole === "admin" ? (
        <>
          {" "}
          <li>
            <Link to="/">
              <FcHome style={{ fontSize: "26px" }} />
              Home
            </Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link to="manageclasses">
              <FcProcess style={{ fontSize: "24px" }} />
              Manage Classes
            </Link>
          </li>
          <li>
            <Link to="manageusers">
              <RiUserSearchLine style={{ color: "blue", fontSize: "24px" }} />
              Manage Users
            </Link>
          </li>
        </>
      ) : userRole === "instructor" ? (
        <>
          <li>
            <Link to="/">
              <FcHome style={{ fontSize: "26px" }} />
              Home
            </Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link to="addaclass">
              <SiAddthis style={{ color: "blue", fontSize: "24px" }} />
              Add A Class
            </Link>
          </li>
          <li>
            <Link to="myclasses">
              <FcGraduationCap style={{ color: "blue", fontSize: "28px" }} />
              My Classes
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/">
              <FcHome style={{ fontSize: "26px" }} />
              Home
            </Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link to="selected-classes">
              <AiOutlineShoppingCart
                style={{ color: "blue", fontSize: "26px" }}
              />
              My Selected Classes
            </Link>
          </li>
          <li>
            <Link to="enrolled-classes">
              <FcPaid style={{ color: "green", fontSize: "26px" }} /> Enrolled
              Classes
            </Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link to="payment-history">
              <FcInfo style={{ fontSize: "26px" }} />
              Payment History
            </Link>
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
            <li className="flex flex-col items-center">
              <img
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  padding: "0",
                }}
                src={user?.photoURL}
                alt={user?.name}
              />
              <p>{user?.email}</p>
              <p className="font-extrabold">{userRole}</p>
            </li>
            <div className="divider"></div>
            {/* Sidebar content here */}
            {dashboardLinks}
            <div className="divider"></div>
            <li>
              <Link type="button" onClick={() => handleLogOut()}>
                <LuLogOut style={{ fontSize: "26px" }} />
                Log out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
