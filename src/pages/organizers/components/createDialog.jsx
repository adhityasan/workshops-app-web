import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Field } from 'react-final-form';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button,
  Grid,
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

import { createRequest } from 'stores/modules/organizers/actions';
import tagOptions from 'constant/tagOptions';
import { get } from 'lodash';

const CreateOrganizerDialog = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const organizerCreate = useSelector(state => get(state, 'organizers.create'));

  const onSubmit = value => {
    dispatch(createRequest(value));
  };

  useEffect(() => {
    if (organizerCreate.status === 'success') setOpen(false);
  }, [organizerCreate.status]);

  const dialogComponent = () => (
    <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title">
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form }) => (
          <form onSubmit={handleSubmit}>
            <DialogTitle id="form-dialog-title">Create Organizer</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To create your own workshop event, you need to create an organizer and you can invite other people to take part of the organizer
              </DialogContentText>
              <Grid container item direction="column" spacing={2}>
                <Grid item>
                  <Field
                    name="name"
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
                <Grid item>
                  <Field
                    name="description"
                    render={({ input }) => (
                      <TextField
                        variant="outlined"
                        name="description"
                        rows={3}
                        multiline
                        label="Description"
                        fullWidth
                        {...input}
                      />
                    )}
                  />
                </Grid>
                <Grid item>
                  <Field
                    name="tags"
                    onValueChaange={value => form.change('tags', value)}
                    render={({ onValueChaange }) => (
                      <Autocomplete
                        multiple
                        options={tagOptions}
                        freeSolo
                        onChange={(_, value) => {
                          onValueChaange(value);
                        }}
                        renderInput={params => (
                          <TextField
                            {...params}
                            variant="outlined"
                            label="tags"
                            placeholder="Select or type the education sector"
                          />
                        )}
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpen(false)} variant="contained" color="secondary">
                Cancel
              </Button>
              <Button type="subm" variant="contained" color="primary">
                Submit
              </Button>
            </DialogActions>
          </form>
        )}
      />
    </Dialog>
  );

  return [
    open,
    setOpen,
    dialogComponent,
  ];
};

export default CreateOrganizerDialog;
