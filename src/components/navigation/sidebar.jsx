import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  // List,
  // ListItem,
  Grid,
  Typography,
  // Drawer,
} from '@material-ui/core';

import WorkshopLogo from 'assets/images/workshop.png';

import {
  Logo,
  Iconic,
  activePublicNavStyle,
} from './styled';
import LogoutButton from './LogoutButton';

const SidebarNav = () => (
  <Container>
    <HeadNav>
      <NavLink to="/" activeStyle={activePublicNavStyle} style={{ textDecoration: 'none', height: 'fit-content' }}>
        <Iconic
          component="div"
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          <Logo src={WorkshopLogo} alt="Workshop Logo" />
          <Typography variant="h5" color="textSecondary" style={{ fontWeight: 'bolder' }}>workshapp</Typography>
        </Iconic>
      </NavLink>
    </HeadNav>
    <BodyNav>
      <Grid container direction="column" spacing={2} wrap="wrap" style={{ padding: '1rem' }}>
        <Grid item>
          <CustomNavLink to="/me" activeStyle={activePublicNavStyle} style={{ textDecoration: 'none', height: 'fit-content' }}>
            <NavItem>
              <Typography variant="subtitle1" component="div">MY PROFILE</Typography>
            </NavItem>
          </CustomNavLink>
        </Grid>
        <Grid item>
          <CustomNavLink to="/my-events" activeStyle={activePublicNavStyle} style={{ textDecoration: 'none', height: 'fit-content' }}>
            <NavItem>
              <Typography variant="subtitle1" component="div">MY EVENTS</Typography>
            </NavItem>
          </CustomNavLink>
        </Grid>
        <Grid item>
          <CustomNavLink to="/organize" activeStyle={activePublicNavStyle} style={{ textDecoration: 'none', height: 'fit-content' }}>
            <NavItem>
              <Typography variant="subtitle1" component="div">ORGANIZE</Typography>
            </NavItem>
          </CustomNavLink>
        </Grid>
        <Grid item>
          <CustomNavLink to="/accomplishment" activeStyle={activePublicNavStyle} style={{ textDecoration: 'none', height: 'fit-content' }}>
            <NavItem>
              <Typography variant="subtitle1" component="div">ACCOMPLISHMENT</Typography>
            </NavItem>
          </CustomNavLink>
        </Grid>
      </Grid>
    </BodyNav>
    <FootNav>
      <LogoutButton showLabel />
    </FootNav>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  height: 100vh;
  padding: 1rem 0;
  background-color: #e5e5e5;
  box-shadow: 4px -1px 9px 1px #b6b6b6;
  box-sizing: border-box;;
  position: fixed;
  left: 0;
  z-index: 1;
`;

const HeadNav = styled.div`
  width: 100%;
  height: 3.5rem;
  border-bottom: 2px solid #cacaca;
`;

const BodyNav = styled.div`
  display: flex;
  flex-direction: column;
`;

const FootNav = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
`;

const NavItem = styled.div`
  transition: 100ms;
  border-radius: 8px;
  background-color: none;
  padding: 0.5rem;
  :hover {
    background-color: ${({ theme }) => theme.palette.secondary.main};
    div {
      color: ${({ theme }) => theme.palette.common.white} !important;
    }
  }
`;

const CustomNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.palette.primary.main};
  text-decoration: none;
`;

export default SidebarNav;
