import { Box, Container, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "./themeContext";

const SixHome = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Box
      sx={{
        backgroundColor: theme.bgColor,
        color: theme.textColor,
      }}
    >
      <Container
        sx={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Typography variant="h1">Home Page</Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          cupiditate eos soluta?
        </Typography>
      </Container>
    </Box>
  );
};

export default SixHome;
