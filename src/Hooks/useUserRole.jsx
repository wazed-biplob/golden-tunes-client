import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUserRole = () => {
  const { user, loading } = useContext(AuthContext);

  const [AX] = useAxiosSecure();
  const { data: userRole } = useQuery({
    queryKey: ["userRole", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const response = await AX(`/users/admin/${user?.email}`);
      return response.data.role;
    },
  });
  return [userRole];
};

export default useUserRole;
