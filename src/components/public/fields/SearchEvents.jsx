import React, { memo } from 'react';
import styled from 'styled-components';

import {
  InputAdornment,
  IconButton,
  TextField,
} from '@material-ui/core';
import {
  Search as SearchIcon,
} from '@material-ui/icons';

const SearchEvents = memo(() => (
  <StyledSearchEvents
    id="search-events"
    name="search-events"
    type="search"
    placeholder="Search Events"
    variant="outlined"
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={() => {}}
            onMouseDown={() => {}}
            edge="end"
          >
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      ),
    }}
  />
));

const StyledSearchEvents = styled(TextField)`
  && {
    margin: 0 1rem;
    min-width: 300px;
    background-color: #f0f0f0;
    border: none;
  }
`;

export default SearchEvents;
