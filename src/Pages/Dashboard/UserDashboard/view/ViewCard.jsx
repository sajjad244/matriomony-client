import Swal from "sweetalert2";
import toast from "react-hot-toast";
import UseAxiosPublic from "../../../../Hooks/UseAxiosPublic";

/* eslint-disable react/prop-types */
const ViewCard = ({bio}) => {
  const axiosPublic = UseAxiosPublic();

  const {
    biodataType,
    name,
    img,
    height,
    weight,
    dob,
    age,
    occupation,
    race,
    fathersName,
    mothersName,
    permanentDivision,
    presentDivision,
    expectedPartnerAge,
    expectedPartnerHeight,
    expectedPartnerWeight,
    email,
    contactNumber,
  } = bio.bioFormData;

  const requestHandler = async () => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, make it premium!",
      });

      if (result.isConfirmed) {
        await axiosPublic.post(`/users/premium/request`, bio);
        Swal.fire({
          title: "Premium!",
          text: "Your request has been sent.",
          icon: "success",
        });
      }
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
      {/* Profile Section */}
      <div className="flex items-center bg-gradient-to-r from-purple-500 to-indigo-500 p-4">
        <img
          src={img}
          alt={`${name}'s profile`}
          className="w-24 h-24 rounded-full border-4 border-white object-cover"
        />
        <div className="ml-4 text-white">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p className="text-sm">{biodataType}</p>
        </div>
      </div>

      {/* Biodata Information */}
      <div className="p-4 text-gray-900 dark:text-white">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold">Date of Birth:</p>
            <p>{dob}</p>
          </div>
          <div>
            <p className="font-semibold">Age:</p>
            <p>{age} years</p>
          </div>
          <div>
            <p className="font-semibold">Height:</p>
            <p>{height} cm</p>
          </div>
          <div>
            <p className="font-semibold">Weight:</p>
            <p>{weight} kg</p>
          </div>
          <div>
            <p className="font-semibold">Occupation:</p>
            <p>{occupation}</p>
          </div>
          <div>
            <p className="font-semibold">Race:</p>
            <p>{race}</p>
          </div>
          <div>
            <p className="font-semibold">Father Name:</p>
            <p>{fathersName}</p>
          </div>
          <div>
            <p className="font-semibold">Mother Name:</p>
            <p>{mothersName}</p>
          </div>
          <div>
            <p className="font-semibold">Permanent Division:</p>
            <p>{permanentDivision}</p>
          </div>
          <div>
            <p className="font-semibold">Present Division:</p>
            <p>{presentDivision}</p>
          </div>
          <div>
            <p className="font-semibold">Expected Partner Age:</p>
            <p>{expectedPartnerAge} years</p>
          </div>
          <div>
            <p className="font-semibold">Expected Partner Height:</p>
            <p>{expectedPartnerHeight} cm</p>
          </div>
          <div>
            <p className="font-semibold">Expected Partner Weight:</p>
            <p>{expectedPartnerWeight} kg</p>
          </div>
          <div>
            <p className="font-semibold">Contact Email:</p>
            <p>{email}</p>
          </div>
          <div>
            <p className="font-semibold">Mobile Number:</p>
            <p>{contactNumber}</p>
          </div>
        </div>
      </div>

      {/* Premium Button */}
      <div className="p-4 bg-gray-50 dark:bg-gray-800">
        <button onClick={requestHandler} className="w-full btn-outline">
          Make BioData Premium
        </button>
      </div>
    </div>
  );
};

export default ViewCard;
