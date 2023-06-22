import { Box } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import ImageComponent from '../../atoms/Image'
import Logo from '../../../../public/assets/images/logo.svg'
import DashboardActive from '../../../../public/assets/images/dashactive.svg'
import Analytics from '../../../../public/assets/images/portfolio.svg'
import Trades from '../../../../public/assets/images/trade.svg'
import Notification from '../../../../public/assets/images/notification.svg'
import LogOut from '../../../../public/assets/images/logout.svg'
import IconComponent from '../../atoms/icon'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

const StyledGrid = styled(Box)(() => ({
  width: '80px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '174px',
  padding: '24px',
  position:'absolute'
}))

const StyledBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '54px',
  height: '32px',
  '.list-item-button:hover': {
    backgroundColor: 'transparent',
  },
  
}))

const iconsList = [DashboardActive, Analytics, Trades, Notification, LogOut]

const SideNavComponent = () => {
  return (
    <StyledGrid data-testid="sideNav">
      <ImageComponent src={Logo} width="32px" height="33px" />
      <StyledBox>
      <List>
        {iconsList.map((icon) => (
          <ListItem key={icon} disablePadding style={{ margin: '14px' }}>
            <ListItemButton className="list-item-button">
                <ListItemIcon>
                    <IconComponent src={icon} width="32px" height="32px" />
                </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      </StyledBox>
    </StyledGrid>
  )
}
export default SideNavComponent




