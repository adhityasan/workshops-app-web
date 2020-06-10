import React, { memo } from 'react';
import styled from 'styled-components';

import selectColor from 'helpers/selector/color';

export default memo(({ text = '', color = selectColor('separator') }) => <StyledSeparator color={color}>{text}</StyledSeparator>);

const StyledSeparator = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: ${props => props.color};
  ::before {
    content: '';
    flex: 1;
    border-bottom: 1px solid ${props => props.color};
    margin-right: .5em;
  }
  ::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid ${props => props.color};
    margin-left: .5em;
  }
`;
