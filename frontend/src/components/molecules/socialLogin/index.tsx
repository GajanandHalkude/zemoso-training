import React from "react";
import MuiTypography from "../../atoms/typography";
import { Box } from "@mui/material"
import IconComponent from "../../atoms/icon";
import { styled } from "@mui/system";
import { useAuth0 } from "@auth0/auth0-react";
import theme from "../../../theme";

interface SocialLoginProps {
    text:string,
    src:string
}
const StylesBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 40px 20px 40px',
    gap: '8px',
    background: '#FAFCFF',
    border: '1px solid #E8E8F7',
    borderRadius: '12px',
    width: '90px',
    height: '60px',
    cursor:"pointer"
})

const SocialLogin = ({text,src}:SocialLoginProps) => {
    const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };
  
    return(
        <StylesBox data-testid="socialIconComponent"onClick={handleLogin}  >
            <IconComponent src={src}/>
            <MuiTypography text={text} sx={{color:theme.palette.textColor.mediumEmphasis}} />
        </StylesBox>
    )

}
export default SocialLogin