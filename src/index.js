import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router , Switch, Redirect } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

import SignInSide from './component/core/SignInSide';
import SignUp from './component/core/SignUp';
import Dashboard from './component/Dashboard/Dashboard';
import PivotTable from './component/Charts/PivotTable';
import Notfound from './component/core/Notfound';

const routing = (
  <Router>
    <Switch>
        <Route path="/signIn" component={SignInSide} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/pivotTable" component={PivotTable} />
        <Redirect exact from="/" to="/signIn" />
        <Route path="*" component={Notfound} />       
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
