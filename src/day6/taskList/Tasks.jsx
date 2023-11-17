import { Button, List, ListItem } from "@mui/material";
import React, { useContext } from "react";
import { TaskContent } from "./TaskContext";

const Tasks = () => {
  const task = useContext(TaskContent);

  return (
    <div>
      <Button onClick={task.updateTasks}>Add New Task</Button>
      <List>
        {task.myTasks.map((value) => (
          <ListItem key={value}>{value}</ListItem>
        ))}
      </List>
    </div>
  );
};

export default Tasks;
