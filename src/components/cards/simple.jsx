import React from 'react';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';

const CardSimple = ({ elevation = 3, padding, children }) => (
  <Container elevation={elevation} padding={padding}>
    {children}
  </Container>
);

const Container = styled(Paper)`
  padding: ${({ padding }) => padding || '1rem'};
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`;

export default CardSimple;
