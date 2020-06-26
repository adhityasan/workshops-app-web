import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ExitToApp } from '@material-ui/icons';

const LogoutButton = ({ showLabel = false }) => {
  const authenticated = useSelector(state => state.auth.authenticated);
  console.log(showLabel);

  return authenticated ? (
    <NavLink to="signout" style={{ textDecoration: 'none' }}>
      <CustomButton showLabel={showLabel}>
        <span>
          SIGNOUT
        </span>
        <ExitToApp />
      </CustomButton>
    </NavLink>
  ) : null;
};

const CustomButton = styled.button`
  transition: 250ms;
  cursor: pointer;
  display: flex;
  padding: 0.5rem;
  align-items: center;
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.palette.primary.contrastText};
  color: ${({ theme }) => theme.palette.primary.main};
  span {
    font-weight: bold;
    transition: 250ms;
    width: ${({ showLabel }) => (showLabel ? 'fit-content' : 0)};
    margin-right: ${({ showLabel }) => (showLabel ? '0.5rem' : 0)};
    overflow: hidden;
  }

  :hover {
    background-color: ${({ theme }) => theme.palette.secondary.main};
    span {
      margin-right: 0.5rem;
      display: inline-block;
      width: fit-content;
    }
  }
`;

export default LogoutButton;
