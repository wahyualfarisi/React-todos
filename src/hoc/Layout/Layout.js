import React , {Component } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {

    render() {
        return(
            <React.Fragment>
                <Toolbar />
                <h1>SideDrawer</h1>
                
                <main>
                    {this.props.children}
                </main>
            </React.Fragment>
        )
    }
}

export default Layout;