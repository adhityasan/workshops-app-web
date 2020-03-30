import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import theme from 'assets/themes/index';
import Routes from 'routes';
import stores from 'stores';
import 'assets/lang';

import { APP_BASENAME } from './constant';

function App() {
  return (
    <Provider store={stores}>
      <BrowserRouter basename={APP_BASENAME}>
        <MuiThemeProvider theme={theme.muiTheme}>
          {/* Inject material ui styles first, so styled components doesn't need "&& {}" to change material ui componnet style */}
          <StylesProvider injectFirst>
            <ThemeProvider theme={theme.styledTheme}>
              <Routes />
            </ThemeProvider>
          </StylesProvider>
        </MuiThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
