import React from 'react';
import { useSelector } from 'react-redux';
import { get as _get } from 'lodash/object';

import { PageWrapper } from 'components/styled';

const Organize = ({ authenticated }) => {
  const myOrganizers = useSelector(state => _get(state, 'me.organizers'));
  const me = useSelector(state => _get(state, 'me'));

  return (
    <PageWrapper>
      <h1>KONTOL</h1>
      <p>{JSON.stringify(me)}</p>
    </PageWrapper>
  );
};

export default Organize;
