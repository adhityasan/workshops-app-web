import React from 'react';
import { Grid } from '@material-ui/core';

import { PageWrapper } from 'components/styled';

import Carousels from './components/carousels';
import PopularAround from './components/popularAround';

const Home = () => (
  <PageWrapper container direction="column" spacing={1}>
    <Grid container item alignContent="stretch">
      <Carousels />
    </Grid>
    <Grid container item direction="column">
      <PopularAround />
      <PopularAround />
      <PopularAround />
      <PopularAround />
    </Grid>
  </PageWrapper>
);

export default Home;
