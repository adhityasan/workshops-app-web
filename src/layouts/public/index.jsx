import React, { memo } from 'react';
import styled from 'styled-components';

import Navigation from 'components/navigation';
import PublicFooter from 'components/footer';

const PublicLayout = ({ children }) => (
  <LayoutWrapper>
    <Navigation />
    <ContentWrapper>
      {children}
      <PublicFooter />
    </ContentWrapper>
  </LayoutWrapper>
);

const ContentWrapper = styled.div`
  padding: 5rem 1rem 2rem 1rem;
  height: 100vh;
  max-width: 100vw;
  box-sizing: border-box;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LayoutWrapper = styled.div`
  position: relative;
`;

export default memo(PublicLayout);
