// React
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

// CSS
import './index.css';

// App
import App from './components/App';

// Theme
import muiTheme from './theme/muiTheme';
import { MuiThemeProvider } from '@material-ui/core/styles';

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={muiTheme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
