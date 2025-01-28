/* eslint-disable react/prop-types */
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {useContext, useEffect, useState} from "react";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import AuthContext from "../../Provider/AuthContext";
import toast from "react-hot-toast";

const CheckoutForm = ({payingInfo, refetch}) => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [isProcessing, setIsProcessing] = useState(false); // Add loading state
  const {user} = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = UseAxiosSecure();
  const totalPrice = payingInfo.amount;

  // Fetch the clientSecret
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", {price: totalPrice})
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      return;
    }

    setIsProcessing(true); // Disable button when processing

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[payment error]", error);
      setError(error.message);
      setIsProcessing(false); // Enable button
      return;
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    // Confirm Card Payment
    const {paymentIntent, error: confirmError} =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("[confirm error]", confirmError);
      setError(confirmError.message);
      setIsProcessing(false); // Enable button
      return;
    }

    console.log("[paymentIntent]", paymentIntent);

    if (paymentIntent.status === "succeeded") {
      console.log("transaction successful", paymentIntent.id);
      setTransactionId(paymentIntent.id);

      // Save the payment in the database
      const payment = {
        transactionId: paymentIntent.id,
        email: user?.email,
        amount: payingInfo.amount,
        payingInfo: payingInfo,
        status: "Pending",
      };

      const res = await axiosSecure.post("/payments", payment);
      refetch();
      toast.success("Payment Successful", res);
    }

    setIsProcessing(false); // Enable button
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="w-full py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-700 transition duration-200 mt-5"
        type="submit"
        disabled={!stripe || !clientSecret || isProcessing} // Disable button based on state
      >
        {isProcessing ? "Processing..." : "Pay $5"} {/* Show loading state */}
      </button>

      <p className="text-red-600">{error}</p>
      <p className="text-green-600">{transactionId && "Payment Successful"}</p>
    </form>
  );
};

export default CheckoutForm;
