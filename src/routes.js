import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Home from './pages/home'
import Users from './pages/usuarios'

function Routes() {

    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/usuarios' component={Users} />
            </Switch>
        </Router>

    )


}

export default Routes