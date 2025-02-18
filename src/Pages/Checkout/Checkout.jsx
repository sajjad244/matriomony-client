import {useParams} from "react-router-dom";
import AuthContext from "../../Provider/AuthContext";
import {useContext} from "react";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import {useQuery} from "@tanstack/react-query";

// ToDo : add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_key);

const Checkout = () => {
  const {user} = useContext(AuthContext);
  const {id} = useParams();
  const axiosPublic = UseAxiosPublic();

  //! Fetch bioData using TanStack Query
  const {data: payingData = {}, refetch} = useQuery({
    queryKey: ["payingData", id],
    queryFn: async () => {
      const {data} = await axiosPublic.get(`/bioDataAll/${id}`);
      return data;
    },
  });

  const payingInfo = {
    name: payingData?.name,
    email: payingData?.email,
    phone: payingData?.bioFormData?.contactNumber,
    amount: 5,
    bioDataId: payingData?.biodataId,
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-md shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Checkout Form
        </h1>
        <div className="space-y-6">
          {/* Biodata ID */}
          <div>
            <label
              htmlFor="biodataId"
              className="block text-gray-700 dark:text-gray-200 font-medium"
            >
              Biodata ID
            </label>
            <input
              type="text"
              id="biodataId"
              name="biodataId"
              value={payingData?.biodataId || ""}
              readOnly
              className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Self Email */}
          <div>
            <label
              htmlFor="selfEmail"
              className="block text-gray-700 dark:text-gray-200 font-medium"
            >
              Your Email
            </label>
            <input
              type="email"
              id="selfEmail"
              name="selfEmail"
              value={user?.email || ""}
              readOnly
              className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Stripe Payment */}
          <Elements stripe={stripePromise}>
            <CheckoutForm
              payingInfo={payingInfo}
              refetch={refetch}
            ></CheckoutForm>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
