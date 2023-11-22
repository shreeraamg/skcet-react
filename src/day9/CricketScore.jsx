import { Button, ButtonGroup, Container, Typography } from "@mui/material";
import { useReducer } from "react";
import { useState } from "react";
import scoreReducer from "./scoreReducer";

const CricketScore = () => {
  // const [score, setScore] = useState(0);

  const [score, dispatch] = useReducer(scoreReducer, 0);

  return (
    <Container
      sx={{
        mt: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <Typography variant="h3" align="center">
        Score: {score}
      </Typography>
      <ButtonGroup variant="contained">
        <Button onClick={() => dispatch({ type: "ONE" })}>One</Button>
        <Button onClick={() => dispatch("TWO")}>Two</Button>
        <Button onClick={() => dispatch("THREE")}>Three</Button>
        <Button onClick={() => dispatch("FOUR")}>Four</Button>
        <Button onClick={() => dispatch("SIX")}>Six</Button>
      </ButtonGroup>
      <Button
        variant="outlined"
        color="error"
        onClick={() => dispatch("RESET")}
      >
        Reset
      </Button>
    </Container>
  );
};

export default CricketScore;
