/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import useUserRole from "../Hooks/useUserRole";

const InstructorRoutes = ({ children }) => {
  const location = useLocation();
  const [userRole] = useUserRole();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div
        className="flex justify-center items-center"
        style={{ height: "100vh", width: "100vw" }}
      >
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  if (user && userRole === "instructor") {
    return children;
  }

  return <Navigate to="/" state={{ from: location }}></Navigate>;
};

export default InstructorRoutes;
