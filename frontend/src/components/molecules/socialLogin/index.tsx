import React from "react";
import MuiTypography from "../../atoms/typography";
import { Box } from "@mui/material"
import IconComponent from "../../atoms/icon";
import { styled } from "@mui/system";
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
    padding: '20px 40px',
    gap: '8px',
    background: '#FAFCFF',
    border: '1px solid #E8E8F7',
    borderRadius: '12px',
    width: '90px',
    height: '60px',
})

const SocialLogin = ({text,src}:SocialLoginProps) => {
    return(
        <StylesBox data-testid="socialIconComponent">
            <IconComponent src={src}/>
            <MuiTypography text={text} sx={{color:theme.palette.textColor.mediumEmphasis}} />
        </StylesBox>
    )

}
export default SocialLogin