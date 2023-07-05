/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from "react";
import { Box, Grid, styled } from "@mui/material";
import { ButtonComponent, CustomTextField, MuiTypography, SocialLogin ,isEmailValid, isPasswordValid ,socialLoginOptions, passwordspecification } from "../../../constants";
import { useNavigate } from "react-router-dom";


const SyledButtonComponent = styled(ButtonComponent)(() => ({
  borderRadius: "4px",
  padding: "0px 16px 0px 16px",
  width: "512px",
  height: "42px",
  textTransform: "none",
  fontSize: "14px",
  "&.Mui-disabled": {
    backgroundColor: "#CCE3FF",
    color: "#FFFFFF",
  },
}));

const SignUp = () => {

  const [formData, setFormData] = useState({
    signuppassword: "",
    signupfullName: "",
    signupemail: ""
  }); 

  const handleInputChange = (fieldName: string, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value
    }));
  };
  const navigate = useNavigate();

  const isSignUpEnabled = isPasswordValid(formData.signuppassword) && isEmailValid(formData.signupemail);

  return (
    <Box display="flex" flexDirection="column" paddingTop="50px" gap="20px">
      <Box display="flex">
        <MuiTypography variant="h4" text="Signup with Minet" />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        sx={{ "& > :not(style) + :not(style)": { marginTop: "5px" } }}
      >
        <Grid display="flex">
          <MuiTypography variant="body1" text="Full Name" />
        </Grid>
        <CustomTextField
          onChange={(value) => handleInputChange("signupfullName", value)}
          placeholder="Eg: Saiprabhu"
          isPassword={false}
          width="512px"
          value={formData.signupfullName}
        />
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
          width="512px"
          value={formData.signupemail}
          onChange={(value) => handleInputChange("signupemail", value)}
          placeholder="saiprabhu.dandanayak@zemosolabs.com"
          isPassword={false}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        sx={{ "& > :not(style) + :not(style)": { marginTop: "5px" } }}
      >
        <Grid display="flex">
          <MuiTypography variant="body1" text="Password" />
        </Grid>
        <CustomTextField
          isPassword
          onChange={(value) => handleInputChange("signuppassword", value)}
          placeholder="Password"
          width="512px"
          value={formData.signuppassword}
        />
      </Box>
      <Box display="flex" sx={{color:"#667085"}}>{passwordspecification}</Box>
      <Box display="flex">
        <SyledButtonComponent
          data-testid="password-toggle-button"
          size="large"
          text="Sign up"
          disabled={!isSignUpEnabled}
          variant="contained"
        />
      </Box>
     
      <Box display="flex" alignItems="center" width={"512px"}>
        <Box flex="1" borderBottom="1px solid #E8E8F7" />
        <Box mx={1} >
          <MuiTypography variant="body2" text="Or" color="#7D7D89" />
        </Box>
        <Box flex="1" borderBottom="1px solid #E8E8F7"  />
      </Box>
      <Box display="flex" gap="30px" width="512px">
        {socialLoginOptions.map((socialLogin) => (
          <SocialLogin
            key={socialLogin.text}
            src={socialLogin.src}
            text={socialLogin.text}
          />
        ))}
      </Box>
      <Box display="flex" alignItems={'center'}>
        <MuiTypography variant="body2" text="Already have an account?" />
        <a href="#" style={{ marginLeft: "10px", textDecoration: "none" }}  onClick={() => navigate("/signin")}>
          Login
        </a>
      </Box>
    </Box>
  );
};
export default SignUp