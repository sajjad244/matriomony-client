import {Navigate} from "react-router-dom";
import useAdmin from "../../Hooks/Admin/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();

  if (isAdmin) {
    return <Navigate to="/dashboard/manageUser" replace="true"></Navigate>;
  }
};

export default Dashboard;
