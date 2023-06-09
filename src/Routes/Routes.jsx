import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import DashBoard from "../DashBoard/DashBoard";
import PrivateRoute from "./PrivateRoutes";
import ManageClasses from "../DashBoard/ManageClasses";
import ManageUsers from "../DashBoard/ManageUsers";
import AdminHome from "../DashBoard/AdminHome";
import AdminRoutes from "./AdminRoutes";
import AddAClass from "../DashBoard/AddAClass";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/instructors", element: <Instructors /> },
      { path: "/registration", element: <Registration /> },
      { path: "/login", element: <Login /> },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashBoard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "adminhome",
        element: (
          <AdminRoutes>
            <AdminHome />
          </AdminRoutes>
        ),
      },
      {
        path: "manageclasses",
        element: <ManageClasses />,
      },
      {
        path: "manageusers",
        element: <ManageUsers />,
      },
      { path: "addaclass", element: <AddAClass /> },
    ],
  },
]);
