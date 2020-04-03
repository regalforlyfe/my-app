import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/views/Pages/Home';
import Album from './components/views/Pages/Album';

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/album" component={Album}/>
            </Switch>
        );
    }
}
export default Router;