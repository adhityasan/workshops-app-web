import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import {
  Box,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

export const Logo = styled.img`
  max-height: 40px;
`;

export const Iconic = styled(Box)`
  border-radius: 8px;
  ${up('md')} {
    margin: 0 2rem;
  }
`;

export const SearchEventsWrapper = styled.div`
  display: none;
  ${up('md')} {
    display: flex;
  }
`;

export const NavigationWrapper = styled.div`
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  top: 0;
  height: 5rem;
  min-width: 100vw;
`;

export const activePublicNavStyle = {
  color: 'orange',
};

export const PublicNav = styled(NavLink)`
  display: none;
  ${up('md')} {
    display: flex;
    margin-right: 2rem;
    font-weight: 800;
    color: grey;
    text-decoration: none;
    text-transform: uppercase;
  }
`;

export const DrawerButton = styled.div`
  ${({ theme }) => `
    color: ${theme.palette.primary.main}
  `}
  ${up('md')} {
    display: none;
  }
`;

export const PublicNavListWrapper = styled.div`
  width: auto;
  padding: 0 1rem;
`;

export const PublicNavList = styled(NavLink)`
  display: flex;
  padding: 1rem;
  font-weight: 800;
  color: grey;
  text-decoration: none;
  text-transform: uppercase;
  ${up('md')} {
    display: none;
  }
`;
