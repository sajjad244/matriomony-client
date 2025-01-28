/* eslint-disable react/prop-types */
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {useContext, useEffect, useState} from "react";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import AuthContext from "../../Provider/AuthContext";

const CheckoutForm = ({payingInfo}) => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const {user} = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = UseAxiosSecure();
  const totalPrice = payingInfo.amount;

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", {price: totalPrice})
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[payment error]", error);
      setError(error.message);
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
    } else {
      console.log("[paymentIntent]", paymentIntent);

      if (paymentIntent.status === "succeeded") {
        console.log("transaction successful", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // now save the payment in the database

        const payment = {
          transactionId: paymentIntent.id,
          email: user?.email,
          amount: payingInfo.amount,
          payingInfo: payingInfo,
          status: "Pending",
        };

        const res = await axiosSecure.post("/payments", payment);
        console.log("payment-save--->>>", res);
      }
    }
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
        disabled={!stripe || !clientSecret}
      >
        Pay 5$
      </button>

      <p className="text-red-600">{error}</p>
      <p className="text-green-600">{transactionId && "Payment Successful"}</p>
    </form>
  );
};

export default CheckoutForm;
