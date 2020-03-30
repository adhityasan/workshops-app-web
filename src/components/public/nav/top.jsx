import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  List,
  ListItem,
  Grid,
  Typography,
  Drawer,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
// import { Trans } from 'react-i18next';


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
  DrawerButton,
  PublicNavListWrapper,
  PublicNavList,
} from './styled';

const NavigationTop = () => {
  const [drawerToggled, setDrawerToggled] = useState(false);

  const toggleDrawer = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setDrawerToggled(open);
  };

  return (
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
          <Drawer anchor="right" open={drawerToggled} onClose={toggleDrawer(false)}>
            <PublicNavListWrapper
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <List>
                {PUBLIC_NAVIGATIONS.map(nav => (
                  <ListItem key={nav.name}>
                    <PublicNavList activeStyle={activePublicNavStyle} to={nav.path}>
                      <Typography>{nav.label}</Typography>
                    </PublicNavList>
                  </ListItem>
                ))}
              </List>
            </PublicNavListWrapper>
          </Drawer>
          <DrawerButton onClick={toggleDrawer(true)}>
            <MenuIcon />
          </DrawerButton>
        </Grid>
      </Grid>
    </NavigationWrapper>
  );
};

export default NavigationTop;
