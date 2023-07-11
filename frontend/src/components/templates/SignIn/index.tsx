import React from "react";
import { Box } from "@mui/material";

export interface AuthTemplateProp {
  img: React.ReactNode;
  body: React.ReactNode;
}

const SignInTemplate = ({ body, img }: AuthTemplateProp) => {
  return (
    <Box
      display="flex"
      gap="80px"
      alignItems="center"
      data-testid="signin-card"
      overflow="hidden"
      width="100%"
      height="715px"
      sx={{ overflowX: "hidden", overflowY: "hidden" }} 
    >
      <Box>
        {img}
      </Box>
      {body}
    </Box>
  );
};

export default SignInTemplate;
