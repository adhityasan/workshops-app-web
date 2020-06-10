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
  height: calc(100vh - 7rem);
  max-width: 100vw;
  box-sizing: border-box;
`;

const LayoutWrapper = styled.div`
  position: relative;
`;

export default memo(PublicLayout);
