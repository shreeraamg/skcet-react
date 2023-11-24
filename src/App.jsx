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

import HOCMain from "./day12/HOCMain";
import MemoHook from "./day12/MemoHook";

const App = () => {
  return <MemoHook />;
};

export default App;
