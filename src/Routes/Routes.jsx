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
import AddAClass from "../DashBoard/AddAClass";
import MyClasses from "../DashBoard/MyClasses";
import AdminRoutes from "./AdminRoutes";
import Class from "../Pages/Class/Class";
import SelectedClasses from "../DashBoard/SelectedClasses";
import EnrolledClasses from "../DashBoard/EnrolledClasses";
import Payment from "../Components/Payment/Payment";
import PaymentHistory from "../Components/Payment/PaymentHistory";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import InstructorRoutes from "./InstructorRoutes";
import StudentRoutes from "./StudentRoutes";

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
      {
        path: "/class",
        element: <Class />,
      },
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
        path: "manageclasses",
        element: (
          <AdminRoutes>
            <ManageClasses />
          </AdminRoutes>
        ),
      },
      {
        path: "manageusers",
        element: (
          <AdminRoutes>
            <ManageUsers />
          </AdminRoutes>
        ),
      },

      {
        path: "addaclass",
        element: (
          <InstructorRoutes>
            <AddAClass />
          </InstructorRoutes>
        ),
      },
      {
        path: "myclasses",
        element: (
          <InstructorRoutes>
            <MyClasses />
          </InstructorRoutes>
        ),
      },

      {
        path: "selected-classes",
        element: (
          <StudentRoutes>
            <SelectedClasses />
          </StudentRoutes>
        ),
      },
      {
        path: "enrolled-classes",
        element: (
          <StudentRoutes>
            <EnrolledClasses />
          </StudentRoutes>
        ),
      },
      {
        path: "payment/:id",
        element: (
          <StudentRoutes>
            <Payment />{" "}
          </StudentRoutes>
        ),
      },
      {
        path: "payment-history",
        element: (
          <StudentRoutes>
            <PaymentHistory />
          </StudentRoutes>
        ),
      },
    ],
  },
  { path: "*", element: <ErrorPage /> },
]);
