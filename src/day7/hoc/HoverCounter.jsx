import { Typography } from "@mui/material";
import React from "react";
import withCounter from "./withCounter";

const HoverCounter = ({ count, increase }) => {
  return (
    <span onMouseOver={increase}>
      <Typography variant="h3">Hovered {count} times</Typography>
    </span>
  );
};

export default withCounter(HoverCounter);
