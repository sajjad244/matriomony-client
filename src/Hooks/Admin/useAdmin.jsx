import {useQuery} from "@tanstack/react-query";
import {useContext} from "react";
import AuthContext from "../../Provider/AuthContext";
import UseAxiosSecure from "../UseAxiosSecure";

const useAdmin = () => {
  //  get single admin data
  const {user} = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();
  const {data: isAdmin} = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      return res.data?.isAdmin;
    },
  });
  return [isAdmin];
};

export default useAdmin;
