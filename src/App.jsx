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

const App = () => {
  return <Users />;
};

export default App;
