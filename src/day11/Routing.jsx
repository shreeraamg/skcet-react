import { createBrowserRouter } from "react-router-dom";
import RHomePage from "./RHomePage";
import RUsersPage from "./RUsersPage";
import RLoginPage from "./RLoginPage";
import RLayout from "./RLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RLayout />,
    children: [
      { path: "", element: <RHomePage /> },
      { path: "users", element: <RUsersPage /> },
      { path: "login", element: <RLoginPage /> },
    ],
  },
]);

export default router;
