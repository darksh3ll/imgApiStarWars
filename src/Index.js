import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Nav from "./Nav";


class Index extends Component {


    render() {
        return (
            <nav>

                <Link to="/peoples">Peoples</Link>
                <Link to="/peoples">Peoples</Link>
                <Link to="/peoples">Peoples</Link>
                <Link to="/peoples">Peoples</Link>

            </nav>
        );
    }
}

export default Index;