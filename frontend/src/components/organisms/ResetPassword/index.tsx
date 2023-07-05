import React, { useState } from "react";
import { Box, Grid, styled} from "@mui/material";
import { ButtonComponent, CustomTextField, MuiTypography } from "../../../constants";
import {passwordspecification} from "../../../../src/constants";
import tick from "../../../../public/assets/images/tick-circle.svg";
import theme from "../../../theme";
import PasswordSuccesful from "../../molecules/passwordSuccess";
import { resetUserPassword } from "../../../services/index";
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

const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordSet, setIsPasswordSet]= useState(false)

  const handlePasswordChange = (value:string) => {
    setPassword(value);
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
  };

  const handleResetClick = () => {
    resetUserPassword(confirmPassword).then(()=>{
      setIsPasswordSet(true)
    })
  };

  const isPasswordValid = (password: string): boolean => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regex.test(password);
  };

  const disableButton = !(
    isPasswordValid(password) &&
    isPasswordValid(confirmPassword) &&
    password === confirmPassword
  );
  const navigate = useNavigate();
   
  return (
    <Box display="flex" flexDirection="column" gap="30px">
      <Box display="flex">
        <MuiTypography
          variant="h4"
          text="Reset Password"
          color={theme.palette.textColor.highEmphasis}
          sx={{ fontSize: "40px" }}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        sx={{ "& > :not(style) + :not(style)": { marginTop: "5px" } }}
      >
        {isPasswordSet ? (
          <PasswordSuccesful
            heading={"Password Reset successful"}
            subtitle={"Click on the button below to proceed login"}
            icon={tick}
          />
        ) : (
          <>
            <Grid display="flex">
              <MuiTypography
                variant="body1"
                text="Enter Password"
                color={theme.palette.greyColors.grey700}
              />
            </Grid>
            <CustomTextField
              data-testid="enter-password"
              width="512px"
              height="48px"
              value={password}
              onChange={handlePasswordChange}
              isPassword
              placeholder="Enter Password"
            />
            <Grid display="flex" marginTop="160px">
              <MuiTypography
                variant="body1"
                text="Re-Enter Password"
                color={theme.palette.greyColors.grey700}
              />
            </Grid>
            <CustomTextField
              data-testid="re-enter-password"
              width="512px"
              height="48px"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              isPassword
              placeholder="Re-Enter Password"
            />
          </>
        )}
      </Box>
     { !isPasswordSet && <Box display="flex" marginTop="-15px" marginBottom="-10px">
        <Grid display="flex">
          <MuiTypography
            variant="body2"
            text={passwordspecification}
            color={theme.palette.greyColors.grey500}
            sx={{fontSize:"14px"}}
          />
        </Grid>
      </Box>}
      <Box display="flex">
        <SyledButtonComponent
          data-testid="link-button"
          size="small"
          text={ !isPasswordSet ? "Reset Password" : "Login"}
          disabled={disableButton && !isPasswordSet}
          onClick={isPasswordSet ? () => navigate("/signin") : handleResetClick}
          variant="contained"
        />
      </Box>
    </Box>
  );
};

export default ResetPassword;
