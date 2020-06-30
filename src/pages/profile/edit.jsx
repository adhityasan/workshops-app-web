import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { get as _get } from 'lodash/object';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import {
  Edit as EditIcon,
  Face as FaceIcon,
} from '@material-ui/icons';

import { updateRequest } from 'stores/modules/profiles/actions';
import status from 'constant/status';

const Dashboard = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const payload = useSelector(state => _get(state, 'me.payload'));
  const profilesUpdate = useSelector(state => _get(state, 'profiles.update'));

  const onSubmit = value => {
    dispatch(updateRequest(_get(payload, '_id'), value));
  };

  useEffect(() => {
    if (profilesUpdate.status === status.success) {
      history.push('/profile');
    }
  }, [profilesUpdate.status, history]);

  return (
    <Wrapper>
      <Grid container direction="column" justify="center" wrap="wrap" alignItems="center">
        <Grid container item xs={10} sm={8} md={6}>
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
              <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <Grid container item direction="column" spacing={2}>
                      <Grid container item>
                        <Field
                          name="name"
                          initialValue={_get(payload, 'name', '')}
                          render={({ input }) => (
                            <TextField
                              variant="outlined"
                              name="name"
                              label="Name"
                              fullWidth
                              {...input}
                            />
                          )}
                        />
                      </Grid>
                      <Grid container item>
                        <Field
                          name="email"
                          initialValue={_get(payload, 'email', '')}
                          render={({ input }) => (
                            <TextField
                              variant="outlined"
                              name="email"
                              label="Email"
                              fullWidth
                              {...input}
                            />
                          )}
                        />
                      </Grid>
                      <Grid container item>
                        <Field
                          name="address"
                          initialValue={_get(payload, 'address', '')}
                          render={({ input }) => (
                            <TextField
                              variant="outlined"
                              name="address"
                              label="Address"
                              fullWidth
                              {...input}
                            />
                          )}
                        />
                      </Grid>
                      <Grid container item>
                        <Field
                          name="phone"
                          initialValue={_get(payload, 'phone', '')}
                          render={({ input }) => (
                            <TextField
                              variant="outlined"
                              name="phone"
                              label="phone"
                              fullWidth
                              {...input}
                            />
                          )}
                        />
                      </Grid>
                      <Grid container item>
                        <Field
                          name="bio"
                          initialValue={_get(payload, 'bio', '')}
                          render={({ input }) => (
                            <TextField
                              variant="outlined"
                              name="bio"
                              rows={3}
                              multiline
                              label="Bio"
                              fullWidth
                              {...input}
                            />
                          )}
                        />
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
                          onClick={() => history.push('/profile')}
                        >
                          Cancel
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          type="submit"
                          variant="contained"
                          color="secondary"
                          startIcon={(
                            <EditIcon />
                          )}
                        >
                          Apply
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                )}
              />
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

const CustomDivider = styled.div`
  width: 100%;
  margin: 1rem 0;
  border-bottom: 2px solid ${({ theme }) => theme.palette.primary.main};
`;

const Wrapper = styled.div`
  padding: 1rem;
  overflow-x: hidden;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  ${up('md')} {
    align-items: center;
  }
`;

export default Dashboard;
