import { useLocation, useParams, useSearchParams } from "react-router-dom";

const Users = () => {
  const params = useParams(); // return a params object;
  // useSearchParams();
  // useLocation();

  console.log(params);

  return <div>User {params.name}</div>;
};

export default Users;
