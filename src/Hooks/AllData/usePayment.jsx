import {useQuery} from "@tanstack/react-query";
import UseAxiosPublic from "../UseAxiosPublic";

const usePayment = () => {
  const axiosPublic = UseAxiosPublic();
  // Fetch bioData using TanStack Query
  const {
    refetch,
    data: allPay = [],
    isLoading,
  } = useQuery({
    queryKey: ["pay"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/payments`);
      return res.data;
    },
  });
  return [allPay, refetch, isLoading];
};

export default usePayment;
