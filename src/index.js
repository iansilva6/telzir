import React from 'react';
import ReactDOM from 'react-dom';

// View
import Home from './views/Home';

// Pwa
import * as serviceWorker from './serviceWorker';

// Global Css
import { GlobalStyle } from './assets/styles/global';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
  {/* CSS Global */}
  <GlobalStyle />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
