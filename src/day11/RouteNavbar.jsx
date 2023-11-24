import { Link } from "react-router-dom";

const RouteNavbar = () => {
  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default RouteNavbar;
