import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = () => {
  const { loading } = useContext(AuthContext);

  const [AX] = useAxiosSecure();
  const { data: users } = useQuery({
    queryKey: ["user"],
    enabled: !loading,
    queryFn: async () => {
      const response = await AX(`/users`);
      return response.data;
    },
  });
  return [users];
};

export default useUsers;
