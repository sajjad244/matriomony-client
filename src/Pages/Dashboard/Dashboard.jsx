import {Navigate} from "react-router-dom";
import useAdmin from "../../Hooks/Admin/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();

  if (isAdmin) {
    return <Navigate to="/dashboard/userProfile" replace={true} />;
  } else {
    return <Navigate to="/dashboard/userProfile" replace={true} />;
  }
};

export default Dashboard;
