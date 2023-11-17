import { Typography } from "@mui/material";
import React, { useContext } from "react";
import { TaskContent } from "./TaskContext";

const TaskNavbar = () => {
  const task = useContext(TaskContent);

  return (
    <Typography variant="h3" textAlign="center">
      Tasks: {task.myTasks.length}
    </Typography>
  );
};

export default TaskNavbar;
