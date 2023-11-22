import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

export default function AuthNavbar() {
  // const [user, setUser] = useState(null);
  const { user, dispatch } = useContext(AuthContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ px: "60px" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          {user === null ? (
            <Button
              color="inherit"
              onClick={() => dispatch({ type: "LOGIN", payload: "Ram" })}
            >
              Login
            </Button>
          ) : (
            <>
              <Typography>{user}</Typography>
              <Button
                color="inherit"
                onClick={() => dispatch({ type: "LOGOUT" })}
              >
                Logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
