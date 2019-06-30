// Default
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// CSS
import './index.css';

// App
import App from './containers/App';

// Theme
import muiTheme from './theme/muiTheme';
import { MuiThemeProvider } from '@material-ui/core/styles';

ReactDOM.render(
  <MuiThemeProvider theme={muiTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
