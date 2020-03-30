import React, { memo } from 'react';
import { Form, Field } from 'react-final-form';
import {
  Grid,
  TextField,
  Button,
  Typography,
} from '@material-ui/core';

import WorkshopLogo from 'assets/images/workshop.png';

import {
  PageWrapper,
  SigninWrapper,
  Iconic,
  Logo,
} from './styled';

const Signin = memo(() => {
  const submitHandler = val => {
    console.log(val);
  };

  return (
    <PageWrapper>
      <SigninWrapper>
        <Iconic
          component="div"
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          <Logo src={WorkshopLogo} alt="Workshop Logo" />
          <Typography variant="h5" color="textSecondary" style={{ fontWeight: 'bolder' }}>workshapp</Typography>
        </Iconic>
        <Form
          onSubmit={submitHandler}
          render={({ handleSubmit }) => (
            <Grid container direction="column" spacing={3}>
              <Grid container item direction="column" spacing={2}>
                <Grid item>
                  <Field name="name">
                    {props => (
                      <TextField
                        required
                        fullWidth
                        id="name"
                        variant="outlined"
                        label="Name"
                        placeholder="Name"
                        name={props.input.name}
                        value={props.input.value}
                        onChange={props.input.onChange}
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item>
                  <Field name="identifier">
                    {props => (
                      <TextField
                        required
                        fullWidth
                        id="email.or.phone"
                        variant="outlined"
                        label="Email or Phone Number"
                        placeholder="Email or Phone Number"
                        name={props.input.name}
                        value={props.input.value}
                        onChange={props.input.onChange}
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item>
                  <Field name="password">
                    {props => (
                      <TextField
                        required
                        fullWidth
                        type="password"
                        id="password"
                        variant="outlined"
                        label="Password"
                        placeholder="Password"
                        name={props.input.name}
                        value={props.input.value}
                        onChange={props.input.onChange}
                      />
                    )}
                  </Field>
                </Grid>
              </Grid>
              <Grid container item justify="flex-end">
                <Button
                  size="large"
                  color="primary"
                  variant="contained"
                  onClick={handleSubmit}
                >
                  SIGN UP
                </Button>
              </Grid>
            </Grid>
          )}
        />
      </SigninWrapper>
    </PageWrapper>
  );
});

export default memo(Signin);
