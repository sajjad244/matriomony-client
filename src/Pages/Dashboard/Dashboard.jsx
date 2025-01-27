import {Navigate} from "react-router-dom";
import useAdmin from "../../Hooks/Admin/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();

  if (isAdmin) {
    return <Navigate to="/dashboard/adminDashboard" replace={true} />;
  } else {
    return <Navigate to="/dashboard/editBioData" replace={true} />;
  }
};

export default Dashboard;
