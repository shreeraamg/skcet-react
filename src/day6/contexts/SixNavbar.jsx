import { Button, Stack, Switch, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "./themeContext";

const SixNavbar = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <Stack
      direction="row"
      alignItems="center"
      height="10vh"
      justifyContent="space-between"
      paddingX={12}
      sx={{
        backgroundColor: theme.bgColor,
        color: theme.textColor,
      }}
    >
      <Typography variant="h6">NavBar</Typography>
      <Stack direction="row" alignItems="center" spacing={3}>
        <Switch onChange={changeTheme} />
        <Button variant="outlined">Login</Button>
        <Button variant="contained">Signup</Button>
      </Stack>
    </Stack>
  );
};

export default SixNavbar;
