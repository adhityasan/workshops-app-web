import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

import palette from './palette';
import typography from './typography';

import MuiButton from './overrides/mui-button';
import MuiFab from './overrides/mui-fab';
import MuiChip from './overrides/mui-chip';

// Custom material ui theme
const theme = createMuiTheme({
  typography,
  palette,
  overrides: {
    MuiButton,
    MuiFab,
    MuiChip,
  },
});

// custom styled components theme
// for ease use styled-breakpoints & other theme context data
const scTheme = {
  ...theme,
  breakpoints: {
    xs: '0px',
    sm: '600px',
    md: '960px',
    lg: '1280px',
    xl: '1920px',
  },
};

export default {
  muiTheme: responsiveFontSizes(theme),
  styledTheme: scTheme,
};
