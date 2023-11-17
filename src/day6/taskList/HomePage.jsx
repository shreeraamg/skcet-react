import { Typography } from "@mui/material";
import React from "react";
import Tasks from "./Tasks";

const HomePage = () => {
  return (
    <div>
      <Typography variant="h5">My Task List</Typography>
      <Tasks />
    </div>
  );
};

export default HomePage;
