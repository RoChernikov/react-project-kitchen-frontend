import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import state from './services/store';
// import { store, history } from './store';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
// import { ConnectedRouter } from 'react-router-redux';

import App from './components/app/app';

ReactDOM.render(
  <Router>
    <Provider store={state}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Provider>
  </Router>,

  document.getElementById('root')
);
