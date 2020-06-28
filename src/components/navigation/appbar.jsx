import React from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import {
  AppBar as MuiAppBar, Typography, IconButton, Toolbar,
} from '@material-ui/core';
import { Menu as MenuIcon, Close as CloseIcon } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';

import WorkshopLogo from 'assets/images/workshop.png';

import {
  Logo,
  Iconic,
  activePublicNavStyle,
} from './styled';

const AppBar = ({ sidebarStatus, setShowSidebar }) => (
  <CustomMuiAppbar position="static" component="div">
    <CustomToolbar>
      <NavLink to="/" activeStyle={activePublicNavStyle} style={{ textDecoration: 'none', height: 'fit-content' }}>
        <Iconic
          component="div"
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          <Logo src={WorkshopLogo} alt="Workshop Logo" />
          <Typography variant="h5" color="textSecondary" style={{ fontWeight: 'bolder' }}>workshapp</Typography>
        </Iconic>
      </NavLink>
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setShowSidebar(!sidebarStatus)}>
        {sidebarStatus ? <CloseIcon /> : <MenuIcon /> }
      </IconButton>
    </CustomToolbar>
  </CustomMuiAppbar>
);

const CustomToolbar = styled(Toolbar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CustomMuiAppbar = styled(MuiAppBar)`
  background-color: #e5e5e5;
  color: ${({ theme }) => theme.palette.primary.main};
  height: 4rem;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  ${up('md')} {
    display: none;
  }
`;

export default AppBar;
