import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

import palette from './palette';
import typography from './typography';

import MuiButton from './overrides/mui-button';
import MuiFab from './overrides/mui-fab';
import MuiChip from './overrides/mui-chip';

const theme = createMuiTheme({
  typography,
  palette,
  overrides: {
    MuiButton,
    MuiFab,
    MuiChip,
  },
});

export default responsiveFontSizes(theme);
