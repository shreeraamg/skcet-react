import { Outlet } from "react-router-dom";
import RouteNavbar from "./RouteNavbar";

const RLayout = () => {
  return (
    <div>
      <RouteNavbar />
      <Outlet />
    </div>
  );
};

export default RLayout;
