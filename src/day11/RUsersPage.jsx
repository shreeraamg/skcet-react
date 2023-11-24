import { Navigate } from "react-router-dom";

const RUsersPage = () => {
  let user = true;

  if (!user) return <Navigate to="/login" />;

  return <div>RUsersPage</div>;
};

export default RUsersPage;
