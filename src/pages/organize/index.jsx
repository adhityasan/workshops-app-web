import React from 'react';
import { useSelector } from 'react-redux';
import { get as _get } from 'lodash/object';
import { Grid } from '@material-ui/core';

const Organize = () => {
  const myOrganizers = useSelector(state => _get(state, 'me.organizers'));
  return (
    <Grid container>
      <Grid item xs={12}>
        <pre>{JSON.stringify(myOrganizers)}</pre>
      </Grid>
    </Grid>
  );
};

export default Organize;
