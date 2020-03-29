import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/views/Pages/Home';
import Profile from './components/views/Pages/Profile';

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/profile" component={Profile}/>
            </Switch>
        );
    }
}
export default Router;