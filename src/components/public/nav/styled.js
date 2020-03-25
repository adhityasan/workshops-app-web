import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import {
  Box,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

export const Logo = styled.img`
  max-height: 40px;
`;

export const Iconic = styled(Box)`
  margin: 0 2rem;
  background-color: #fafafa;
  border-radius: 8px;
`;

export const SearchEventsWrapper = styled.div`
  display: flex;
  ${down('tablet')} {
    display: none;
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
  margin-right: 2rem;
  font-weight: 800;
  color: grey;
  text-decoration: none;
  text-transform: uppercase;
`;
