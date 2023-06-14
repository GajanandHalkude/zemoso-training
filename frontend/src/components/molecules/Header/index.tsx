import { Box, Divider, Grid, styled } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import theme from '../../../theme'
import ButtonComponent from '../../atoms/button'
import MuiTypography from '../../atoms/typography'
import AvatarComponent from '../../atoms/avatar'
import IconComponent from '../../atoms/icon'
import chevronDropdown from "../../../../public/assets/images/avatardropdown.svg"
import {buy} from "../../../../src/constants"
import {sell} from "../../../../src/constants"


 export interface IHeaderProps {
    pageName: string;
    displayButtons?:boolean;
  }



const CustomBox = styled(Box)({
padding: '20px 24px 20px 24px',
[theme.breakpoints.up('lg')]: {
maxWidth: '1500px'
},
[theme.breakpoints.up('xl')]: {
maxWidth: '98vw'
},
[theme.breakpoints.down('lg')]: {
minWidth: '1366px'
},
[theme.breakpoints.between('lg', 'xl')]: {
width: '97vw',
},
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
        <NavLink to="/sell" style={{ textDecoration: 'none' }}>
          <CustomButton variant="contained" backgroundColor="#FFA74F" text={sell}/>
        </NavLink>
      </Grid>

      <Grid item>
        <NavLink to="/purchase" style={{ textDecoration: 'none' }}>
          <CustomButton variant="contained" backgroundColor="#0052FF" text={buy} />
        </NavLink>
      </Grid>
      </Grid>
}
      <Divider orientation="vertical" variant="middle" flexItem />
      <Grid item display="flex" alignItems="center"  gap="10px">
        <AvatarComponent height="30px" width="30px" />
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