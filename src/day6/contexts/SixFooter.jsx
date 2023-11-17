import { Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "./themeContext";
const SixFooter = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Stack
      height="10vh"
      alignItems="center"
      direction="row"
      paddingX={12}
      justifyContent="space-between"
      sx={{
        backgroundColor: theme.bgColor,
        color: theme.textColor,
      }}
    >
      <Typography variant="body2" fontSize="14px">
        All rights reserved
      </Typography>
      <Typography variant="body2" fontSize="14px">
        Day 6
      </Typography>
    </Stack>
  );
};

export default SixFooter;
