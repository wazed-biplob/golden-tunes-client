import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useEnrolledClasses = () => {
  const { user, loading } = useContext(AuthContext);
  const [AX] = useAxiosSecure();
  const { data: enrolledClasses } = useQuery({
    queryKey: ["classes"],
    enabled: !loading,
    queryFn: async () => {
      const response = await AX(`/payments/${user?.email}`);
      return response.data;
    },
  });
  return [enrolledClasses];
};

export default useEnrolledClasses;
