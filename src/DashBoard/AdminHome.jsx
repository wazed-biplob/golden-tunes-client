import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useUserRole from "../Hooks/useUserRole";

const AdminHome = () => {
  const { user } = useContext(AuthContext);
  const [userRole] = useUserRole();
  console.log(userRole);
  return (
    <div>
      <h1>{user.displayName}</h1>
    </div>
  );
};

export default AdminHome;
