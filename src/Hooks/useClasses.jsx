import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useClasses = () => {
  const { loading } = useContext(AuthContext);

  const [AX] = useAxiosSecure();
  const { data: classes } = useQuery({
    queryKey: ["classes"],
    enabled: !loading,
    queryFn: async () => {
      const response = await AX(`/classes`);
      return response.data;
    },
  });
  return [classes];
};

export default useClasses;
