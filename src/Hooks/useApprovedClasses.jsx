import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Providers/AuthProviders";

const useApprovedClasses = () => {
  const { loading } = useContext(AuthContext);
  const [AX] = useAxiosSecure();
  const { data: approvedClasses } = useQuery({
    queryKey: ["classes"],
    enabled: !loading,
    queryFn: async () => {
      const response = await AX(`/approved-classes`);
      return response.data;
    },
  });
  return [approvedClasses];
};

export default useApprovedClasses;
