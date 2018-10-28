import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Nav from "./Nav";


class Home extends Component {


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

export default Home;