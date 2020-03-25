import React from 'react';
import styled from 'styled-components';

import DoubleBounce from 'components/loader/doubleBounce';

const Loader = () => (
  <Wrapper>
    <DoubleBounce color="orange" width="80px" height="80px" />
  </Wrapper>
);

export default Loader;

const Wrapper = styled.div`
  text-align: center;
  position: fixed;
  min-height: 100vh;
  min-width: 100vw;
  background-color: #fafafa;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
