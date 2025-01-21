import {useContext} from "react";
import AuthContext from "../../Provider/AuthContext";
import {useQuery} from "@tanstack/react-query";
import UseAxiosPublic from "../UseAxiosPublic";

const usePremium = () => {
  //  get single premium data
  const {user} = useContext(AuthContext);
  const axiosPublic = UseAxiosPublic();
  const {data: premium} = useQuery({
    queryKey: [user?.email, "premium"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/premium/${user?.email}`);
      return res.data?.premium;
    },
  });
  return [premium];
};

export default usePremium;
