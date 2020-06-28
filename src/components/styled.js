import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export const PageWrapper = styled(Grid)`
  position: relative;
  padding: 1rem 0.5rem;
  max-width: 1200px;
`;

export const CardContainer = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
`;


export default CardContainer;