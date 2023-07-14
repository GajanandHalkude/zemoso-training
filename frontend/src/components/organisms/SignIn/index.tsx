/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from "react";
import { Box, Grid, styled } from "@mui/material";
import { getUserByEmail } from "../../../services";
import { ButtonComponent, CustomTextField, MuiTypography, SocialLogin ,isEmailValid, isPasswordValid ,socialLoginOptions} from "../../../constants";
import { useNavigate } from 'react-router-dom';
import { login } from "../../../services/reduxhook";
import { useDispatch } from "react-redux";

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
const SignInCard = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });

  const [signInMessage, setSignInMessage] = useState("");
  const handleInputChange = (fieldName: string, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

   const handleSignIn = async () => {
   
    const { email, password } = formData;
     getUserByEmail(email).then((response) => {
      const dataArray = response;
       if(dataArray.password!==password){
        setSignInMessage("password doesnot match")
       }
       else{
        dispatch(login());
        setSignInMessage("");
        navigate("/dashboard");
       }
       setFormData({
        password: "",
        email:""
      });
      }).catch(() => {
        setSignInMessage("user doesnot exists")
      })
  };
  
  const navigate = useNavigate();

  const isSignInEnabled = isPasswordValid(formData.password) && isEmailValid(formData.email);

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
        data-testid="email-input"
          onChange={(value) => handleInputChange("email", value)}
          width="512px"
          value={formData.email}
          placeholder="you@company.com"
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
          placeholder="Enter Password"
        />
      </Box>
      <Box display="flex" >
        <a href="#"  style={{ textDecoration: "none" }} onClick={() => navigate("/forgetpassword")}> <MuiTypography variant="body2" text="Forget Password" /></a>
      </Box>
      <Box display="flex">
        <SyledButtonComponent
          sx={{ width: "520px", textTransform: "none" }}
          data-testid="password-toggle-button"
          size="large"
          text="Sign In"
          disabled={!isSignInEnabled}
          variant="contained"
         onClick={ () => {handleSignIn();
        }}
        />
      </Box>
      {signInMessage && (
        <Box display="flex" justifyContent="space-between" marginLeft="180px">
          <p
            style={{
              color: signInMessage.includes("Password does not match") || signInMessage.includes("User does not exist")
                ? "green"
                : "red",
            }}
          >
            {signInMessage}
          </p>
        </Box>
      )}

      <Box display="flex" alignItems="center" width={"512px"}>
        <Box flex="1" borderBottom="2px solid #E8E8F7" />
        <Box mx={1}>
          <MuiTypography variant="body2" text="Or" color="#7D7D89" />
        </Box>
        <Box flex="1" borderBottom="2px solid #E8E8F7" />
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
        <a href="#" style={{ marginLeft: "10px", textDecoration: "none"}} onClick={() => navigate("/signup")}>
          Signup
        </a>
      </Box>
    </Box>
  );
};

export default SignInCard;
