import {useParams} from "react-router-dom";
import AuthContext from "../../Provider/AuthContext";
import {useContext} from "react";

const Checkout = () => {
  const {user} = useContext(AuthContext);
  const {id} = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    const customerInfo = {
      bioId: id,
      selfEmail: user?.email,
      name: user?.displayName,
    };
  };

  return (
    <div className=" container mx-auto h-screen">
      <div className="container mx-auto mt-10 p-6 bg-white rounded-md shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Checkout Form</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Biodata ID */}
          <div>
            <label
              htmlFor="biodataId"
              className="block text-gray-700 font-medium"
            >
              Biodata ID
            </label>
            <input
              type="text"
              id="biodataId"
              name="biodataId"
              value={id}
              readOnly
              className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Self Email */}
          <div>
            <label
              htmlFor="selfEmail"
              className="block text-gray-700 font-medium"
            >
              Your Email
            </label>
            <input
              type="email"
              id="selfEmail"
              name="selfEmail"
              value={user?.email}
              readOnly
              className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* stripe */}
          {/* stripe */}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
