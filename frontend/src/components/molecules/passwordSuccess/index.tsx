import styled from "@emotion/styled";
import { Box} from "@mui/material";
import React from "react";
import theme from "../../../theme";
import IconComponent from "../../atoms/icon/index";
import MuiTypography from '../../atoms/typography'

interface Props {
    icon:string,
    heading: string,
    subtitle: string,
}

const StyledGrid1 = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '24px',
    gap: '12px',
    left: '0px',
    top: '0px',
    borderRadius: '12px',
    background: theme.palette.primary.success100,
    border:` 1px solid ${theme.palette.greyColors.grey100}`,

});

const StyledGridIcon = styled(Box)({
    color:theme.palette.primary.main,
  });


const PasswordSuccesful = ({icon,heading,subtitle}: Props) => {
    return (
        <StyledGrid1 data-testid="password-successful">

            <StyledGridIcon>
                <IconComponent  src={icon}  />
            </StyledGridIcon>

            <Box>
               <MuiTypography variant="body1" text={heading} sx={{color: theme.palette.textColor.highEmphasis }} />
               <MuiTypography variant="body2" text={subtitle} sx={{color:theme.palette.textColor.mediumEmphasis}} />
            </Box>

        </StyledGrid1>
    )
}
export default PasswordSuccesful