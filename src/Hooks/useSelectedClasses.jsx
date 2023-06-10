import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSelectedClasses = () => {
  const { loading } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  const [AX] = useAxiosSecure();
  const { data: selectedClasses } = useQuery({
    queryKey: ["classes"],
    enabled: !loading,
    queryFn: async () => {
      const response = await AX(`/selected-classes/${user?.email}`);
      return response.data;
    },
  });
  return [selectedClasses];
};

export default useSelectedClasses;
