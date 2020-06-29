import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { get as _get } from 'lodash/object';
import {
  Grid,
  Typography,
  Button,
} from '@material-ui/core';

import NoOrganizer from './components/noOrganizer';
import useCreateOrganizer from './components/createDialog';
import OrganizerCard from './components/organizerCard';

const Organize = () => {
  const myOrganizers = useSelector(state => _get(state, 'me.payload.organizers', []));
  const [dialogOpenStatus, setDialog, CreateDialog] = useCreateOrganizer();

  return (
    <Wrapper>
      {myOrganizers.length === 0
        ? <NoOrganizer />
        : (
          <Grid container direction="column" spacing={4}>
            <CreateDialog />
            <Grid container item direction="row" justify="space-between">
              <Grid item>
                <Typography variant="h4">My Organizers</Typography>
                <div style={{ width: '100%', borderBottom: '2px solid #4f4f4f' }} />
              </Grid>
              <Grid item>
                <Button size="large" variant="outlined" color="primary" onClick={() => setDialog(!dialogOpenStatus)}>Create New Organizer</Button>
              </Grid>
            </Grid>
            <Grid container item spacing={2}>
              {myOrganizers.map(org => (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <OrganizerCard organizer={org} />
                </Grid>
              ))}
            </Grid>
            <Grid container item>
              <Grid item>
                <Typography variant="h4">Contribute To</Typography>
                <div style={{ width: '100%', borderBottom: '2px solid #4f4f4f' }} />
              </Grid>
            </Grid>
          </Grid>
        )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2rem;
  max-height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  box-sizing: border-box;
`;

export default Organize;
