import {useQuery} from "@tanstack/react-query";
import UseAxiosPublic from "../UseAxiosPublic";

// !!!!!!! ------------------->>
// !! fetch all data using TanStack Query and axios {hook}
// !!!!!!! ------------------->>

const UseAllData = () => {
  const axiosPublic = UseAxiosPublic();

  // Fetch bioData using TanStack Query
  const {
    refetch,
    data: allBio = [],
    isLoading,
  } = useQuery({
    queryKey: ["allBio"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/bioDataAll`);
      return res.data;
    },
  });
  return [allBio, refetch, isLoading];
};

export default UseAllData;
