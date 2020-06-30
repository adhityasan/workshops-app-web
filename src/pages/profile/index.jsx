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
      <Grid container justify="center" alignItems="flex-start" spacing={3}>
        <Grid item xs={10} sm={8} md={6}>
          <ProfileCard payload={me.payload} />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1rem;
  max-height: 100%;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  box-sizing: border-box;
  ${up('md')} {
    align-items: center;
  }
`;

export default Dashboard;
