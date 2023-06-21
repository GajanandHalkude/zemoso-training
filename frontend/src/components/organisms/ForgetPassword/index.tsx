import React, { useState } from "react";
import { Box, Grid, styled } from "@mui/material";
import { ButtonComponent, CustomTextField, MuiTypography } from "../../../constants";
import theme from "../../../theme";

interface ForgetPasswordProps {
  label:string;
  buttonText:string;
  isSendLink:boolean
}

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

const ForgetPassword: React.FC<ForgetPasswordProps> = ({label,buttonText,isSendLink }) => {
  const [value, setValue] = useState("");

  const isEmailValid = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const isValidCode = (code:string):boolean=>{
   const codeRegex = /^[0-9]{8}$/;
  return codeRegex.test(code);
  }

  const handleChange = (value: string) => {
    setValue(value);
  };

  const handleSendResetLink = () => {return};

  const isButtonDisabled = isSendLink? !isEmailValid(value): !isValidCode(value)
  return (
    <Box display="flex" flexDirection="column" paddingTop="50px" gap="30px">
      <Box display="flex">
        <MuiTypography
          variant="h4"
          text="Forgot Password"
          color={theme.palette.textColor.highEmphasis}
          sx={{ fontSize: "40px" }}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        sx={{ "& > :not(style) + :not(style)": { marginTop: "5px" } }}
      >
        <Grid display="flex">
          <MuiTypography
            variant="body1"
            text={label}
            color={theme.palette.greyColors.grey700}
          />
        </Grid>
        <CustomTextField
          onChange={(value) => handleChange(value)}
          width="512px"
          height="48px"
          value={value}
          placeholder={isSendLink ? "abc@gmail.com" : "8 digit code"}
          isPassword={false}
        />
      </Box>
      <Box display="flex" marginTop="-6px">
        <SyledButtonComponent
          data-testid="link-button"
          size="small"
          text={buttonText}
          disabled={isButtonDisabled}
          onClick={handleSendResetLink}
          variant="contained"
        />
      </Box>
      <Box display="flex">
        <MuiTypography
          variant="body2"
          text="Back to"
          color={theme.palette.textColor.mediumEmphasis}
          sx={{ fontSize: "16px" }}
        />
        <a
          href="#"
          style={{
            marginLeft: "8px",
            marginTop: "2px",
            fontSize: "16px",
            textDecoration: "none",
          }}
        >
          Login
        </a>
      </Box>
    </Box>
  );
};

export default ForgetPassword;
