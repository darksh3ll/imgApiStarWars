import React, {Component} from 'react';

class Nav extends Component {
    render() {
        return (
            <div className="navbars">
                <h4>{this.props.long} peoples</h4>
            </div>
        );
    }
}

export default Nav;