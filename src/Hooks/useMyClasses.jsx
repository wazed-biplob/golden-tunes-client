import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useMyClasses = () => {
  const { user, loading } = useContext(AuthContext);
  const [AX] = useAxiosSecure();
  const { data: myClasses, refetch } = useQuery({
    queryKey: ["classes"],
    enabled: !loading,
    queryFn: async () => {
      const response = await AX(`/my-classes/instructor/${user?.email}`);
      return response.data;
    },
  });
  return [myClasses, refetch];
};

export default useMyClasses;
