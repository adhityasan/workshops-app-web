import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

import Carousels from './components/carousels';
import PopularAround from './components/popularAround';

const Home = () => (
  <Wrapper container padding="1rem 0.5rem" direction="column" spacing={1}>
    <Grid item>
      <Carousels />
    </Grid>
    <Grid container item direction="column">
      <PopularAround />
    </Grid>
  </Wrapper>
);
const Wrapper = styled(Grid)`
  position: relative;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export default Home;
