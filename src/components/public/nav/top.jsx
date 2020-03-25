import React, { memo } from 'react';
import { Link } from 'react-router-dom';
// import { Trans } from 'react-i18next';

import {
  Grid,
  Typography,
} from '@material-ui/core';

import WorkshopLogo from 'assets/images/workshop.png';
import SearchEvents from 'components/public/fields/SearchEvents';
import { PUBLIC_NAVIGATIONS } from 'constant/navigations';

import {
  Logo,
  Iconic,
  PublicNav,
  NavigationWrapper,
  SearchEventsWrapper,
  activePublicNavStyle,
} from './styled';

const NavigationTop = memo(() => (
  <NavigationWrapper>
    <Grid container direction="row" alignItems="center">
      <Grid container item xs={6} direction="row" alignItems="center">
        <Link to="/" style={{ textDecoration: 'none', height: 'fit-content' }}>
          <Iconic
            component="div"
            display="flex"
            flexDirection="row"
            alignItems="center"
          >
            <Logo src={WorkshopLogo} alt="Workshop Logo" />
            <Typography variant="h5" color="textSecondary" style={{ fontWeight: 'bolder' }}>workshapp</Typography>
          </Iconic>
        </Link>
        <SearchEventsWrapper>
          <SearchEvents />
        </SearchEventsWrapper>
      </Grid>
      <Grid container item xs={6} direction="row" justify="flex-end">
        {PUBLIC_NAVIGATIONS.map(nav => (
          <PublicNav key={nav.name} activeStyle={activePublicNavStyle} to={nav.path}>
            <Typography>{nav.label}</Typography>
          </PublicNav>
        ))}
      </Grid>
    </Grid>
  </NavigationWrapper>
));

export default NavigationTop;
