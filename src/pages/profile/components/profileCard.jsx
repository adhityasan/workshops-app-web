import React, { memo } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { get as _get } from 'lodash/object';
import {
  Paper,
  Grid,
  Avatar,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import {
  Edit as EditIcon,
  Face as FaceIcon,
} from '@material-ui/icons';

const ProfileCard = memo(({ payload }) => {
  const history = useHistory();
  return (
    <Paper elevation={3} style={{ width: '100%' }}>
      <Grid container spacing={2} direction="column" style={{ padding: '2rem' }}>
        <Grid container item direction="row" spacing={2} alignContent="center" justify="center" alignItems="center">
          <Grid item>
            <Avatar alt={_get(payload, 'email', '')} src={_get(payload, 'profilePicture', '')} />
          </Grid>
          <Grid item>
            <Typography variant="h6" component="div" noWrap>
              {_get(payload, 'name', '') || _get(payload, 'email', '')}
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <CustomDivider />
        </Grid>
        <Grid container item direction="column" spacing={2}>
          <Grid container item>
            <TextField disabled name="name" value={_get(payload, 'name', '')} label="Name" fullWidth />
          </Grid>
          <Grid container item>
            <TextField disabled name="email" value={_get(payload, 'email', '')} label="Email" fullWidth />
          </Grid>
          <Grid container item>
            <TextField disabled name="address" value={_get(payload, 'address', '')} label="Address" fullWidth />
          </Grid>
          <Grid container item>
            <TextField disabled name="phone" value={_get(payload, 'phone', '')} label="phone" fullWidth />
          </Grid>
          <Grid container item>
            <TextField disabled name="bio" rows={3} multiline value={_get(payload, 'bio', '')} label="Bio" fullWidth />
          </Grid>
        </Grid>
        <Grid container item direction="row" justify="flex-end" spacing={1} style={{ marginTop: '1rem' }}>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              startIcon={(
                <FaceIcon />
              )}
              onClick={() => history.push(`/profile/${_get(payload, '_id', '')}/preview`)}
            >
              Preview
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              startIcon={(
                <EditIcon />
              )}
              onClick={() => history.push(`/profile/${_get(payload, '_id', '')}/edit`)}
            >
              Edit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
});

const CustomDivider = styled.div`
  width: 100%;
  margin: 1rem 0;
  border-bottom: 2px solid ${({ theme }) => theme.palette.primary.main};
`;

export default ProfileCard;
