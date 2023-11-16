import { Typography } from "@mui/material";

let count = 0;

const Purity = () => {
  count++;
  return <Typography variant="h4">{count}</Typography>;
  // Impure component
};

export default Purity;
