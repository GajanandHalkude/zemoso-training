import React from "react";
import { Box } from "@mui/material";
import ImageComponent from "../../atoms/Image";

export interface AuthTemplateProp{
  img:string
  body:React.ReactNode;
}

const SignInTemplate = ({body,img}:AuthTemplateProp) => {
  return (
    <Box
      display="flex"
      gap="40px"
      alignItems="center"
      justifyContent="center"
      data-testid="signin-card"
    >
      <Box sx={{marginTop:"40px"}}>
        <ImageComponent src={img} height="660px"  data-testid="image" />
      </Box>
       {body}
    </Box>
  );
};

export default SignInTemplate;


