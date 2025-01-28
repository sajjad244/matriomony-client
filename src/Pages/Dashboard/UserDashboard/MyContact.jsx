import {useQuery} from "@tanstack/react-query";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import LoadingSpinner from "../../../Shared/LoadingSpinner";

const MyContact = () => {
  const axiosPublic = UseAxiosPublic();

  //! Fetch bioData using TanStack Query
  const {isLoading, data: contactDAta = []} = useQuery({
    queryKey: ["contactDAta"],
    queryFn: async () => {
      const {data} = await axiosPublic.get("/payments");
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  console.log(contactDAta);

  return <div>i am from my contact</div>;
};

export default MyContact;
