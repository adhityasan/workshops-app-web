import React from 'react';
import styled from 'styled-components';

import SidebarNav from 'components/navigation/sidebar';

const AppLayout = ({ children }) => (
  <LayoutWrapper>
    <SidebarNav />
    <ContentWrapper>
      {children}
    </ContentWrapper>
  </LayoutWrapper>
);

const LayoutWrapper = styled.div`
  position: fixed;
  min-height: 100vh;
  min-width: 100vw;
`;

const ContentWrapper = styled.div`
  height: 100vh;
  box-sizing: border-box;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 15rem;
`;

export default AppLayout;
