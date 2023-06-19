/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import { ButtonComponent, CustomTextField, MuiTypography, SocialLogin } from "../../../constants";
import { socialLoginOptions } from "../../../../src/constants";


const SignInCard = () => {

  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });

  const handleInputChange = (fieldName: string, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  const isSignInEnabled = formData.password.length > 0;
  return (
    <Box display="flex" flexDirection="column" paddingTop="50px" gap="30px">
      <Box display="flex">
        <MuiTypography variant="h4" text="Login to Minet" />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        sx={{ "& > :not(style) + :not(style)": { marginTop: "5px" } }}
      >
        <Grid display="flex">
          <MuiTypography variant="body1" text="Email" />
        </Grid>
        <CustomTextField
          onChange={(value) => handleInputChange("email", value)}
          width="512px"
          value={formData.email}
          placeholder="saiprabhu.dandanayak@zemosolabs.com"
          isPassword={false}
          />
      </Box>
      <Box
        sx={{ "& > :not(style) + :not(style)": { marginTop: "5px" } }}
        display="flex"
        flexDirection="column"
      >
        <Grid display="flex">
          <MuiTypography variant="body1" text="Password" />
        </Grid>
        <CustomTextField
          data-testid="password-toggle-button"
          width="512px"
          onChange={(value) => handleInputChange("password", value)}
          isPassword
          value={formData.password}
          placeholder="Password"
        />
      </Box>
      <Box display="flex">
        <a href="#">Forgot Password</a>
      </Box>
      <Box display="flex">
        <ButtonComponent
          sx={{ width: "520px", textTransform: "lowercase" }}
          data-testid="password-toggle-button"
          size="large"
          text="Sign In"
          disabled={!isSignInEnabled}
          variant="contained"
        />
      </Box>

      <Box display="flex" alignItems="center">
        <Box flex="0.16" borderBottom="2px solid #E8E8F7" />
        <Box mx={1} >
          <MuiTypography variant="body2" text="Or" color="#7D7D89" />
        </Box>
        <Box flex="0.16" borderBottom="2px solid #E8E8F7"  />
      </Box>
      <Box display="flex" gap="30px" width="512px">
        {socialLoginOptions.map((socialLogin) => (
          <SocialLogin
          src={socialLogin.src}
          key={socialLogin.text}
          text={socialLogin.text}
          />
        ))}
  
      </Box>
      <Box display="flex">
        <MuiTypography variant="body2" text="Doesn't have an account?" />
        <a href="#" style={{ marginLeft: "10px" }}>
          Signup
        </a>
      </Box>
    </Box>
  );
};

export default SignInCard;
