import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './containers/Logon';
import Register from './containers/Register';
import Profile from './containers/Profile';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;