import React, {Component} from "react";
import {Route,BrowserRouter,Switch,Navlink} from "react-router-dom"
import Home from "./Home";
import FetchApi from "./FetchApi";

class Routing extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/peoples" component={FetchApi}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routing;