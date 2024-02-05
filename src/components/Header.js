import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box sx={{ display: "flex", padding: "15px" }}>
      <Box>
        {" "}
        <Typography variant="h4">FakeStore</Typography>
      </Box>
    </Box>
  );
};

export default Header;
