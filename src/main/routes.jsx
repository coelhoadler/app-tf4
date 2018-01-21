import React from 'react';
import { Router, Route, Redirect, hashHistory} from 'react-router';

import Home from '../home/home';
import PayEvent from '../pay-event/payEvent';

export default props => {
    return (
        <Router history={hashHistory}>
            <Route path='/app' component={Home} />
            <Route path='/payEvent' component={PayEvent} />
            <Redirect from='*' to='/app' />
        </Router>
    );
}