import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  List,
  ListItem,
  Grid,
  Typography,
  Drawer,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

import navCondition from 'helpers/validator/navCondition';
import WorkshopLogo from 'assets/images/workshop.png';
import SearchEvents from 'components/form/fields/SearchEvents';
import ALL_NAVIGATIONS from 'constant/navigations';

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

const Navigation = () => {
  const [drawerToggled, setDrawerToggled] = useState(false);
  const states = useSelector(state => state);

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
          {ALL_NAVIGATIONS.map(nav => (navCondition(states, nav.strict)
            ? (
              <PublicNav key={nav.name} activeStyle={activePublicNavStyle} to={nav.path}>
                <ListItem>
                  <Typography>{nav.label}</Typography>
                </ListItem>
              </PublicNav>
            ) : null))}
          <Drawer anchor="right" open={drawerToggled} onClose={toggleDrawer(false)}>
            <PublicNavListWrapper
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <List>
                {ALL_NAVIGATIONS.map(nav => (navCondition(states, nav.strict)
                  ? (
                    <PublicNavList key={nav.name} activeStyle={activePublicNavStyle} to={nav.path}>
                      <ListItem>
                        <Typography>{nav.label}</Typography>
                      </ListItem>
                    </PublicNavList>
                  ) : null))}
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

export default Navigation;
