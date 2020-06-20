import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ExitToApp } from '@material-ui/icons';

const LogoutButton = () => {
  const authenticated = useSelector(state => state.auth.authenticated);

  return authenticated ? (
    <NavLink to="signout" style={{ textDecoration: 'none' }}>
      <CustomButton>
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
    transition: 250ms;
    width: 0;
    overflow: hidden;
  }

  :hover {
    background-color: ${({ theme }) => theme.palette.secondary.main};
    color: ${({ theme }) => theme.palette.secondary.contrastText};
    span {
      margin-right: 0.5rem;
      display: inline-block;
      width: fit-content;
    }
  }
`;

export default LogoutButton;
