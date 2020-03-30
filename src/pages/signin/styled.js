import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import {
  Grid,
  Box,
} from '@material-ui/core';


export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  padding: 1rem;
  min-height: 100%;
  ${up('sm')} {
    justify-content: center;
    align-items: center;
  }
`;

export const SigninWrapper = styled(Grid)`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  alig-items: center;
  position: relative;
  padding: 1rem;
  border: 1px solid #c0c0c0;
  border-radius: 5px;
  width: 100%;
  ${up('sm')} {
    max-width: 450px;
  }
`;

export const Logo = styled.img`
  max-height: 40px;
`;

export const Iconic = styled(Box)`
  border-radius: 8px;
  justify-content: center;
  padding: 0 0 1.2rem 0;
`;
