import { Box, Button, Container, Typography } from "@mui/material";
import { useMemo, useState } from "react";

const MemoHook = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const increaseOne = () => setCountOne(countOne + 1);
  const increaseTwo = () => setCountTwo(countTwo + 1);

  const isEven = useMemo(() => {
    for (let i = 0; i < 2000000000; i++) {
      i++;
    }
    return countOne % 2 === 0 ? "EVEN" : "ODD";
  }, [countOne]);

  return (
    <Container>
      <Box sx={{ display: "flex", gap: "12px" }}>
        <Button onClick={increaseOne}>{countOne}</Button>
        <Typography>{isEven}</Typography>
      </Box>
      <Box>
        <Button onClick={increaseTwo}>{countTwo}</Button>
      </Box>
    </Container>
  );
};

export default MemoHook;
