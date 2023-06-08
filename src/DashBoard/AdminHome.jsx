import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const AdminHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>{user.displayName}</h1>
    </div>
  );
};

export default AdminHome;
