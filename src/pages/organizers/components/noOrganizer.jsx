import React, { memo } from 'react';
import {
  Grid,
  Typography,
  Button,
} from '@material-ui/core';

import useCreateOrganizer from './createDialog';

const NoOrganizer = memo(() => {
  const [dialogOpenStatus, setDialog, CreateDialog] = useCreateOrganizer();
  return (
    <>
      <CreateDialog />
      <Grid container direction="column" justify="center" alignItems="center" spacing={3}>
        <Grid item align="center">
          <Typography variant="h5">You Have No Organizer</Typography>
          <Typography variant="body2">Create your own organizer to start creating your own workshop event now</Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={() => setDialog(!dialogOpenStatus)}>Create Organizer</Button>
        </Grid>
      </Grid>
    </>
  );
});

export default NoOrganizer;
