import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routes from 'containers/Routes/Routes';
import configureStore from 'store/configureStore';
import ScrollToTop from 'containers/ScrollToTop/ScrollToTop';

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ScrollToTop>
        <Route path="*" component={Routes} />
      </ScrollToTop>
    </Router>
  </Provider>,
  document.querySelector('#app'),
);
