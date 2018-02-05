import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './components/app';

const store = require("./store/configStore").configure();
//create an instance of localstorage every time the redux state has changed  
store.subscribe(() => {
  const { countries } = store.getState();
  countries.users.length > 0 &&
  localStorage.setItem('data', JSON.stringify(countries.users));
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
