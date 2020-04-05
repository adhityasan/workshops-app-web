import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Field } from 'react-final-form';
import {
  Grid,
  TextField,
  Button,
  Typography,
} from '@material-ui/core';

import Separator from 'components/separator';

import config from 'config';
import GoogleIcon from 'assets/images/google.svg';
import WorkshopLogo from 'assets/images/workshop.png';
import { authenticate } from 'stores/modules/auth/action';
import { email } from 'helpers/validator';

import {
  PageWrapper,
  SigninWrapper,
  Iconic,
  Logo,
} from './styled';

const Signin = memo(() => {
  const dispatch = useDispatch();

  const submitHandler = val => {
    const isEmail = email(val.username);
    const data = isEmail.status
      ? { strategy: 'local', email: val.username, password: val.password }
      : { strategy: 'local-phone', phone: val.username, password: val.password };
    dispatch(authenticate(data));
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
            <form onSubmit={handleSubmit}>
              <Grid container direction="column" spacing={3}>
                <Grid container item direction="column" spacing={2}>
                  <Grid item>
                    <Field name="username">
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
                          autoComplete="username"
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
                          autoComplete="current-password"
                        />
                      )}
                    </Field>
                  </Grid>
                </Grid>
                <Grid container item direction="row" justify="flex-end" spacing={3}>
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      type="submit"
                      size="large"
                      color="primary"
                      variant="contained"
                    >
                      SIGN IN
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Separator text="or" />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      size="large"
                      color="primary"
                      variant="contained"
                      href={config.API.GOOGLE_SIGNIN}
                      startIcon={<img alt="google icon" src={GoogleIcon} />}
                    >
                      SIGN IN WITH GOOGLE
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          )}
        />
      </SigninWrapper>
    </PageWrapper>
  );
});

export default memo(Signin);
