import React, {Component} from "react";
import {Route,BrowserRouter,Switch,Navlink} from "react-router-dom"
import Index from "./Index";
import FetchApi from "./FetchApi";

class Routing extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Index} />
                    <Route path="/peoples" component={FetchApi}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routing;