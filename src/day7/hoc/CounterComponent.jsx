import { Button } from "@mui/material";
import React from "react";
import withCounter from "./withCounter";

const CounterComponent = ({ count, increase }) => {
  return <Button onClick={increase}>Clicked {count} Times</Button>;
};

export default withCounter(CounterComponent);
