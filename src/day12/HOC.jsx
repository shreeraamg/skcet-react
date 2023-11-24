import { Button, Container } from "@mui/material";
import React from "react";
import counterFunction from "./counterFunction";

const HOC = ({ count, increase }) => {
  return (
    <Container>
      <Button onClick={increase}>Count is {count}</Button>
    </Container>
  );
};

export default counterFunction(HOC);
