import React, { memo } from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { Paper } from '@material-ui/core';

const event = memo(({ data }) => (
  <Container>
    {JSON.stringify(data)}
  </Container>
));

const Container = styled(Paper)`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  ${up('sm')} {
  }
`;

export default event;
