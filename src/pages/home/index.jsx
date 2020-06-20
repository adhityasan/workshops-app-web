import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

import Carousels from './components/carousels';
import PopularAround from './components/popularAround';

const Home = () => (
  <Wrapper container padding="1rem 0.5rem" direction="column" spacing={1}>
    <Grid container item alignContent="stretch">
      <Carousels />
    </Grid>
    <Grid container item direction="column">
      <PopularAround />
      <PopularAround />
      <PopularAround />
      <PopularAround />
    </Grid>
  </Wrapper>
);

const Wrapper = styled(Grid)`
  position: relative;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
`;

export default Home;
