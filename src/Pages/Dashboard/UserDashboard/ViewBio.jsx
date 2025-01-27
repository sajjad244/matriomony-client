import {useQuery} from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import LoadingSpinner from "../../../Shared/LoadingSpinner";
import {useContext} from "react";
import AuthContext from "../../../Provider/AuthContext";
import ViewCard from "./view/ViewCard";

const ViewBio = () => {
  const axiosSecure = UseAxiosSecure();
  const {user} = useContext(AuthContext);

  // useIng tanstack query to get the bio
  const {data: bioData, isLoading} = useQuery({
    queryKey: ["bio"],
    queryFn: async () => {
      const {data} = await axiosSecure.get(`/bioData?email=${user?.email}`); //get specific user bio
      return data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  console.log(bioData);

  return (
    <div>
      {bioData && bioData.length > 0 ? (
        <>
          <h1 className=" text-center text-cyan-400 font-bold text-4xl my-20 ">
            Bio data of {user?.displayName}
          </h1>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
            {bioData.map((bio) => (
              <ViewCard bio={bio} key={bio._id}></ViewCard>
            ))}
          </div>
        </>
      ) : (
        <>
          <h1 className=" text-center text-cyan-400 font-bold text-4xl h-screen flex items-center justify-center">
            No data Available
          </h1>
        </>
      )}
    </div>
  );
};

export default ViewBio;
