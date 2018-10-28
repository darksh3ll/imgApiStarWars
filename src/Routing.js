import React, {Component} from "react";
import {Route,BrowserRouter,Switch,Navlink} from "react-router-dom"
import Home from "./Home";
import FetchApi from "./FetchApi";
import Info from "./Info";

class Routing extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/peoples" component={FetchApi}/>
                    <Route path="/info" component={Info}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routing;