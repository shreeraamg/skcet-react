// Task Context Main Code
/*
const App = () => {
  const [myTasks, setMyTasks] = useState([]);

  const updateState = ({ arr }) => {
    setMyTasks([...myTasks, Date.now()]);
  };

  return (
    <div>
      <TaskContent.Provider value={{ myTasks, updateState }}>
        <TaskNavbar />
        <HomePage />
      </TaskContent.Provider>
    </div>
  );
};
*/

import { RouterProvider } from "react-router-dom";
import router from "./day11/Routing";
import AuthContext from "./day10/auth/AuthContext";

const App = () => {
  return (
    <AuthContext.Provider value={{}}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
};

export default App;
