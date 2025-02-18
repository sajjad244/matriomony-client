import {useContext} from "react";
import AuthContext from "../../../Provider/AuthContext";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import toast from "react-hot-toast";

const EditBio = () => {
  const {user} = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const bioFormData = Object.fromEntries(formData.entries());

    const customerDetails = {
      bioFormData,
      email: user.email,
      name: user.displayName,
      photoURL: user.photoURL,
    };

    try {
      await axiosSecure.post("/bioData", customerDetails);
      toast.success("Bio data updated successfully");
    } catch (err) {
      console.log(err);
    }
    form.reset();
  };

  return (
    <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-800 shadow-md rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Edit Biodata
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Biodata Type */}
        <div className="mb-4">
          <label
            htmlFor="biodataType"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
          >
            Biodata Type
          </label>
          <select
            id="biodataType"
            name="biodataType"
            className="w-full border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-md p-2"
          >
            <option value="">Select Type</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Name */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-md p-2"
          />
        </div>

        {/* Profile Image */}
        <div className="mb-4">
          <label
            htmlFor="profileImage"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
          >
            Profile Image
          </label>
          <input
            type="url"
            id="profileImage"
            name="img"
            className="w-full border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-md p-2"
          />
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <label
            htmlFor="dob"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            className="w-full border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-md p-2"
          />
        </div>

        {/* Height */}
        <div className="mb-4">
          <label
            htmlFor="height"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
          >
            Height
          </label>
          <select
            id="height"
            name="height"
            className="w-full border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-md p-2"
          >
            <option value="">Select Height</option>
            <option value="5ft">5 ft</option>
            <option value="6ft">6 ft</option>
          </select>
        </div>

        {/* Weight */}
        <div className="mb-4">
          <label
            htmlFor="weight"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
          >
            Weight
          </label>
          <select
            id="weight"
            name="weight"
            className="w-full border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-md p-2"
          >
            <option value="">Select Weight</option>
            <option value="50kg">50 kg</option>
            <option value="60kg">60 kg</option>
          </select>
        </div>

        {/* Age */}
        <div className="mb-4">
          <label
            htmlFor="age"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
          >
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            className="w-full border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-md p-2"
          />
        </div>

        {/* Occupation */}
        <div className="mb-4">
          <label
            htmlFor="occupation"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
          >
            Occupation
          </label>
          <select
            id="occupation"
            name="occupation"
            className="w-full border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-md p-2"
          >
            <option value="">Select Occupation</option>
            <option value="engineer">Engineer</option>
            <option value="doctor">Doctor</option>
          </select>
        </div>

        {/* Race */}
        <div className="mb-4">
          <label
            htmlFor="race"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
          >
            Race (Skin Color)
          </label>
          <select
            id="race"
            name="race"
            className="w-full border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-md p-2"
          >
            <option value="">Select Race</option>
            <option value="fair">Fair</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        {/* Father's Name */}
        <div className="mb-4">
          <label
            htmlFor="fathersName"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
          >
            Father Name
          </label>
          <input
            type="text"
            id="fathersName"
            name="fathersName"
            className="w-full border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-md p-2"
          />
        </div>

        {/* Mother's Name */}
        <div className="mb-4">
          <label
            htmlFor="mothersName"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
          >
            Mother Name
          </label>
          <input
            type="text"
            id="mothersName"
            name="mothersName"
            className="w-full border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-md p-2"
          />
        </div>

        {/* Permanent Division */}
        <div className="mb-4">
          <label
            htmlFor="permanentDivision"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
          >
            Permanent Division
          </label>
          <select
            id="permanentDivision"
            name="permanentDivision"
            className="w-full border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-md p-2"
          >
            <option value="">Select Division</option>
            <option value="dhaka">Dhaka</option>
            <option value="chittagong">Chittagong</option>
            <option value="rangpur">Rangpur</option>
            <option value="barisal">Barisal</option>
            <option value="khulna">Khulna</option>
            <option value="mymensingh">Mymensingh</option>
            <option value="sylhet">Sylhet</option>
          </select>
        </div>

        {/* Present Division */}
        <div className="mb-4">
          <label
            htmlFor="presentDivision"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
          >
            Present Division
          </label>
          <select
            id="presentDivision"
            name="presentDivision"
            className="w-full border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-md p-2"
          >
            <option value="">Select Division</option>
            <option value="dhaka">Dhaka</option>
            <option value="chittagong">Chittagong</option>
            <option value="rangpur">Rangpur</option>
            <option value="barisal">Barisal</option>
            <option value="khulna">Khulna</option>
            <option value="mymensingh">Mymensingh</option>
            <option value="sylhet">Sylhet</option>
          </select>
        </div>

        {/* Expected Partner Age */}
        <div className="mb-4">
          <label
            htmlFor="expectedPartnerAge"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
          >
            Expected Partner Age
          </label>
          <input
            type="number"
            id="expectedPartnerAge"
            name="expectedPartnerAge"
            className="w-full border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-md p-2"
          />
        </div>

        {/* Expected Partner Height */}
        <div className="mb-4">
          <label
            htmlFor="expectedPartnerHeight"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
          >
            Expected Partner Height
          </label>
          <select
            id="expectedPartnerHeight"
            name="expectedPartnerHeight"
            className="w-full border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-md p-2"
          >
            <option value="">Select Height</option>
            <option value="5ft">5 ft</option>
            <option value="6ft">6 ft</option>
          </select>
        </div>

        {/* Expected Partner Weight */}
        <div className="mb-4">
          <label
            htmlFor="expectedPartnerWeight"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
          >
            Expected Partner Weight
          </label>
          <select
            id="expectedPartnerWeight"
            name="expectedPartnerWeight"
            className="w-full border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-md p-2"
          >
            <option value="">Select Weight</option>
            <option value="50kg">50 kg</option>
            <option value="60kg">60 kg</option>
          </select>
        </div>

        {/* Contact Email */}
        <div className="mb-4">
          <label
            htmlFor="contactEmail"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
          >
            Contact Email
          </label>
          <input
            type="email"
            id="contactEmail"
            name="email"
            defaultValue={user?.email}
            className="w-full border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-md p-2"
            readOnly
          />
        </div>

        {/* Contact Number */}
        <div className="mb-4">
          <label
            htmlFor="contactNumber"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
          >
            Contact Number
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            className="w-full border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-md p-2"
            required
          />
        </div>

        {/* Add Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700"
          >
            Save And Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBio;
