import React, { useState } from "react";
import TaskNavbar from "./day6/taskList/TaskNavbar";
import HomePage from "./day6/taskList/HomePage";
import { TaskContent } from "./day6/taskList/TaskContext";

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

export default App;
