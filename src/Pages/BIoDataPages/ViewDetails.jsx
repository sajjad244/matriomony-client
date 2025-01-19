import {useParams} from "react-router-dom";

const ViewDetails = () => {
  const {id} = useParams();

  console.log(id);

  return (
    <div className="h-screen mt-10 container mx-auto">
      <h1>View Details</h1>
    </div>
  );
};

export default ViewDetails;
