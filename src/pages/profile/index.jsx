import React from 'react';
import { useSelector } from 'react-redux';
import { get as _get } from 'lodash/object';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import {
  Grid,
} from '@material-ui/core';

import ProfileCard from './components/profileCard';

const Dashboard = () => {
  const me = useSelector(state => _get(state, 'me'));

  return (
    <Wrapper>
      <Grid container direction="column" justify="center" wrap="wrap" alignItems="center">
        <Grid container item xs={12} sm={10} md={8}>
          <ProfileCard payload={me.payload} />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

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
