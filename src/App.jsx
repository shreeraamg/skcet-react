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

import { useReducer } from "react";
import AuthHomePage from "./day10/auth/AuthHomePage";
import AuthNavbar from "./day10/auth/AuthNavbar";
import { AuthContext } from "./day10/auth/AuthContext";
import authReducer from "./day10/auth/authReducer";
import ANavbar from "./day10/auth/ANavbar";

const App = () => {
  // const [user, setUser] = useState(null);
  const [user, dispatch] = useReducer(authReducer, null);

  return (
    // <ANavbar />
    <AuthContext.Provider value={{ user, dispatch }}>
      <AuthNavbar />
      <AuthHomePage />
    </AuthContext.Provider>
  );
};

export default App;
