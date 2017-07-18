import 'babel-polyfill';
import { Provider } from 'react-redux';
import React from 'react';
import { StyleRoot } from 'radium';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routes from 'containers/Routes/Routes';
import configureStore from 'store/configureStore';
import ScrollToTop from 'containers/ScrollToTop/ScrollToTop';

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <StyleRoot>
      <Router>
        <ScrollToTop>
          <Route path="*" component={Routes} />
        </ScrollToTop>
      </Router>
    </StyleRoot>
  </Provider>,
  document.querySelector('#app'),
);
