import usePayment from "../../../Hooks/AllData/usePayment";

const PayedUsers = () => {
  const [allPay] = usePayment();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Paid Users</h2>
      <div className="space-y-4">
        {allPay?.map((payment) => (
          <div
            key={payment._id}
            className="p-4 border rounded-md shadow-md bg-white dark:bg-gray-800"
          >
            <p>
              <span className="font-semibold">Name:</span>{" "}
              {payment.payingInfo?.name || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              {payment.payingInfo?.email || "N/A"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PayedUsers;
