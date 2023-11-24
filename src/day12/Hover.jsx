import { Button, Container } from "@mui/material";
import React, { useState } from "react";
import counterFunction from "./counterFunction";

const Hover = ({ count, increase }) => {
  return (
    <Container>
      <Button onMouseOver={increase}>Count is {count}</Button>
    </Container>
  );
};

export default counterFunction(Hover);
