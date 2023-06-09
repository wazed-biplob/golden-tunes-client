import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = () => {
  const { loading, user } = useContext(AuthContext);

  const [AX] = useAxiosSecure();
  const { refetch, data: users } = useQuery({
    queryKey: ["users", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const response = await AX(`/users`);
      return response.data;
    },
  });
  return [refetch, users];
};

export default useUsers;
