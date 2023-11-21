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

import Users from "./day8/Users";
import CricketScore from "./day9/CricketScore";
import MyForm from "./day9/MyForm";

const App = () => {
  return <MyForm />;
};

export default App;
