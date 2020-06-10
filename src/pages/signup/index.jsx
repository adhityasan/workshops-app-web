import React, { memo } from 'react';
import { Form, Field } from 'react-final-form';
import {
  Grid,
  TextField,
  Button,
  Typography,
} from '@material-ui/core';

import config from 'config';

import WorkshopLogo from 'assets/images/workshop.png';
import GoogleIcon from 'assets/images/google.svg';

import { renderTextField } from 'components/form/fields/TextField';

import {
  email as validateEmail,
} from 'helpers/validator';

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
                  <Field
                    id="username"
                    name="username"
                    validate={validateEmail('username')}
                    label="Phone Number or Email Address"
                    variant="outlined"
                    autoComplete="username"
                  >
                    {renderTextField}
                  </Field>
                </Grid>
                <Grid item>
                  <Field
                    id="password"
                    name="password"
                    label="Password"
                    variant="outlined"
                    autoComplete="password"
                    type="password"
                  >
                    {renderTextField}
                  </Field>
                </Grid>
              </Grid>
              <Grid container item justify="flex-end" spacing={3}>
                <Grid item>
                  <Button
                    size="large"
                    color="primary"
                    variant="contained"
                    href={config.API.GOOGLE_SIGNIN}
                    startIcon={<img alt="google icon" src={GoogleIcon} />}
                  >
                    SIGN IN WITH GOOGLE
                  </Button>
                </Grid>
                <Grid item>
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
            </Grid>
          )}
        />
      </SigninWrapper>
    </PageWrapper>
  );
});

export default memo(Signin);
