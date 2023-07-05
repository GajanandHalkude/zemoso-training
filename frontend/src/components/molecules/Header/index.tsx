import { Box, Divider, Grid, styled } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import theme from '../../../theme'
import ButtonComponent from '../../atoms/button'
import MuiTypography from '../../atoms/typography'
import AvatarComponent from '../../atoms/avatar'
import IconComponent from '../../atoms/icon'
import chevronDropdown from "../../../../public/assets/images/avatardropdown.svg"
import Logo from "../../../../public/assets/images/avatar.svg"
import { buy, sell } from "../../../../src/constants"

 export interface IHeaderProps {
    pageName: string;
    displayButtons?:boolean;
  }

const CustomBox = styled(Box)({
padding: '20px 24px 20px 24px',
borderBottom: `1px solid ${theme.palette.greyColors.grey100}`,
})

const CustomButton = styled(ButtonComponent)({
borderRadius: '4px',
padding: '0px 16px 0px 16px',
width: '120px',
height: '42px',
})

const StyledIconContainer = styled(Grid)({
    paddingTop: '7px',
})


const Header: React.FC<IHeaderProps> = ({pageName, displayButtons}:IHeaderProps) => {
  const location = useLocation();
  const { state } = location as {state?:any} ;
  
 
  const navigate = useNavigate()
return (
<CustomBox data-testid="Header">
<Grid container>
<Grid item xs={6}>
<MuiTypography
         variant="h6"
         width="122px"
         height="34px"
         color="textColor.highEmphasis"
         text={pageName}
       />
</Grid>
    <Grid item container wrap="nowrap" xs={6} justifyContent="flex-end" columnGap={2}>
        {displayButtons && 
        <Grid  display="flex" alignItems="row" gap="12px">
      <Grid item>
          <CustomButton variant="contained" backgroundColor="#FFA74F" 
          onClick={() => navigate("/sell",{
            state: {coindId : state.coindId || ''}
          } )} 
          text={sell}/>
      </Grid>
      <Grid item>
          <CustomButton variant="contained" backgroundColor="#0052FF" 
          onClick={() => navigate("/purchase",{
            state: {coindId : state.coindId || ''}
          } )} 
          text={buy}  />
      </Grid>
      </Grid>
}
      <Divider orientation="vertical" variant="middle" flexItem />
      <Grid item display="flex" alignItems="center"  gap="10px">
        <AvatarComponent height="30px" width="30px" src={Logo} />
        <StyledIconContainer item>
                <IconComponent width='13px' height='13px' src={chevronDropdown}/>
            </StyledIconContainer>
      </Grid>


    </Grid>
  </Grid>
</CustomBox>
)
}

export default Header