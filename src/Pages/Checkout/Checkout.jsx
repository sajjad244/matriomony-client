import {useParams} from "react-router-dom";
import AuthContext from "../../Provider/AuthContext";
import {useContext} from "react";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import {useQuery} from "@tanstack/react-query";

// ToDO : add publishable key
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
  // console.log("payingData for-->>", payingData);

  const payingInfo = {
    name: payingData?.name,
    email: payingData?.email,
    phone: payingData?.bioFormData?.contactNumber,
    amount: 5,
    bioDataId: payingData?.biodataId,
  };

  console.log(payingInfo);

  return (
    <>
      <div className=" container mx-auto h-screen">
        <div className="container mx-auto mt-10 p-6 bg-white rounded-md shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-6">Checkout Form</h1>
          <div className="space-y-6">
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
                value={payingData?.biodataId || ""}
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
                value={user?.email || ""}
                readOnly
                className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* stripe */}
            <Elements stripe={stripePromise}>
              <CheckoutForm
                payingInfo={payingInfo}
                refetch={refetch}
              ></CheckoutForm>
            </Elements>
            {/* stripe */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
