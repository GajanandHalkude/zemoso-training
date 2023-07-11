import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, Tooltip } from '@mui/material';
import { styled } from '@mui/system';
import ImageComponent from '../../atoms/Image';
import Logo from '../../../../public/assets/images/logo.svg';
import DashboardActive from '../../../../public/assets/images/dashactive.svg';
import Dashboard from '../../../../public/assets/images/dashboard.svg';
import Analytics from '../../../../public/assets/images/portfolio.svg';
import Trades from '../../../../public/assets/images/trade.svg';
import Notification from '../../../../public/assets/images/notification.svg';
import LogOut from '../../../../public/assets/images/logout.svg';
import IconComponent from '../../atoms/icon';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useAuth0 } from '@auth0/auth0-react';
import { URL_DOMAIN } from '../../../constants';
import { logout as logoutRedux } from "../../../services/reduxhook";
import { useDispatch } from "react-redux";

const StyledGrid = styled(Box)(() => ({
  width: '80px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '174px',
  padding: '24px',
  position: 'absolute',
}));

const StyledBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '54px',
  height: '32px',
  '.list-item-button:hover': {
    backgroundColor: 'transparent',
  },
}));

const iconsList = [Dashboard, Analytics, Trades, Notification, LogOut];

const SideNavComponent = () => {
  const dispatch = useDispatch();
  const { logout } = useAuth0();

  const handleLogout = () => {
    dispatch(logoutRedux());
    logout({ logoutParams: { returnTo:`${URL_DOMAIN}`} })
  };
  
  const location = useLocation();
  const isActive = location.pathname === '/dashboard';

  return (
    <StyledGrid data-testid="sideNav">
      <ImageComponent src={Logo} width="32px" height="33px" />
      <StyledBox>
        <List>
          {iconsList.map((icon, index) => {
            if (index === 0) {
              const iconComponent = isActive ? (
                <Tooltip title="Dashboard" arrow>
                <ListItemIcon>
                  <IconComponent src={DashboardActive} width="32px" height="32px" />
                </ListItemIcon>
                </Tooltip>
              ) : (
                <Tooltip title="Dashboard" arrow>
                <ListItemIcon>
                  <IconComponent src={icon} width="32px" height="32px" />
                </ListItemIcon>
                </Tooltip>
              );

              return (
                <ListItem key={icon} disablePadding style={{ margin: '14px' }}>
                  <ListItemButton className="list-item-button" component={Link} to="/dashboard">
                    {iconComponent}
                  </ListItemButton>
                </ListItem>
              );
            } else if (index === iconsList.length - 1) {
              return (
                <ListItem key={icon} disablePadding style={{ margin: '14px' }}>
                  <ListItemButton className="list-item-button" component={Link} to="/signin" onClick={handleLogout}>
                  <Tooltip title="LogOut" arrow>
                    <ListItemIcon>
                      <IconComponent src={icon} width="32px" height="32px" />
                    </ListItemIcon>
                    </Tooltip>
                  </ListItemButton>
                </ListItem>
              );
            } else {
              return (
                <ListItem key={icon} disablePadding style={{ margin: '14px' }}>
                  <ListItemButton className="list-item-button">
                  <Tooltip title={"My Portfolio"} arrow>
                    <ListItemIcon>
                      <IconComponent src={icon} width="32px" height="32px" />
                    </ListItemIcon>
                    </Tooltip>
                  </ListItemButton>
                </ListItem>
              );
            }
          })}
        </List>
      </StyledBox>
    </StyledGrid>
  );
};

export default SideNavComponent;
