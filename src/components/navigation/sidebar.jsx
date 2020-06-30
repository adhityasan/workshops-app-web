import React from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { NavLink } from 'react-router-dom';
import {
  Grid,
  Typography,
} from '@material-ui/core';
import {
  Face as FaceIcon,
  School as SchoolIcon,
  SupervisedUserCircle as SupervisedUserCircleIcon,
  CheckCircle as CheckCircleIcon,
} from '@material-ui/icons';
import WorkshopLogo from 'assets/images/workshop.png';

import {
  Logo,
  Iconic,
  activePublicNavStyle,
} from './styled';
import LogoutButton from './LogoutButton';

const SidebarNav = ({ show }) => (
  <Container show={show}>
    <HeaderSidebar>
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
    </HeaderSidebar>
    <BodySidebar>
      <Grid container direction="column" spacing={2} wrap="wrap" style={{ padding: '1rem' }}>
        <Grid item>
          <CustomNavLink to="/profile" activeStyle={activePublicNavStyle} style={{ textDecoration: 'none', height: 'fit-content' }}>
            <NavItem>
              <FaceIcon />
              <Typography variant="subtitle1" component="div">PROFILE</Typography>
            </NavItem>
          </CustomNavLink>
        </Grid>
        <Grid item>
          <CustomNavLink to="/events" activeStyle={activePublicNavStyle} style={{ textDecoration: 'none', height: 'fit-content' }}>
            <NavItem>
              <SchoolIcon />
              <Typography variant="subtitle1" component="div">EVENTS</Typography>
            </NavItem>
          </CustomNavLink>
        </Grid>
        <Grid item>
          <CustomNavLink to="/organizers" activeStyle={activePublicNavStyle} style={{ textDecoration: 'none', height: 'fit-content' }}>
            <NavItem>
              <SupervisedUserCircleIcon />
              <Typography variant="subtitle1" component="div">ORGANIZERS</Typography>
            </NavItem>
          </CustomNavLink>
        </Grid>
        <Grid item>
          <CustomNavLink to="/accomplishment" activeStyle={activePublicNavStyle} style={{ textDecoration: 'none', height: 'fit-content' }}>
            <NavItem>
              <CheckCircleIcon />
              <Typography variant="subtitle1" component="div">ACCOMPLISHMENT</Typography>
            </NavItem>
          </CustomNavLink>
        </Grid>
      </Grid>
    </BodySidebar>
    <FooterSidebar>
      <LogoutButton showLabel />
    </FooterSidebar>
  </Container>
);

const Container = styled.div`
  flex-direction: column;
  width: 15rem;
  height: 100vh;
  background-color: #e5e5e5;
  box-shadow: 4px 3px 9px 1px #b6b6b6;
  box-sizing: border-box;;
  position: fixed;
  right: 0;
  z-index: 3;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  svg {
    margin-right: 0.5rem;
  }
  ${up('md')} {
    padding: 1rem 0;
    left: 0;
    box-shadow: 4px -1px 9px 1px #b6b6b6;
    display: flex;
  }
`;

const HeaderSidebar = styled.div`
  display: none;
  ${up('md')} {
    width: 100%;
    height: 3.5rem;
    border-bottom: 2px solid #cacaca;
    display: block;
  }
`;

const BodySidebar = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  ${up('md')} {
    margin: 0;
  }
`;

const FooterSidebar = styled.div`
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
  font-weight: 500;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
