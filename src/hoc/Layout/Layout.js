import React , {Component } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css';

class Layout extends Component {
    state = {
        isShowSideDrawer: false
    }


    sideDrawerCloseHandler = () => {
        this.setState({ isShowSideDrawer: false })
    }

    sideDrawerToggleHandler = () => {
        this.setState(prevState => {
            return {
                isShowSideDrawer: !prevState.isShowSideDrawer
            }
        })
    }

    render() {
        
        return(
            <React.Fragment>
                <Toolbar 
                    toggleHandler={this.sideDrawerToggleHandler} 
                    isShowSideDrawer={this.state.isShowSideDrawer} />
                <SideDrawer 
                    open={this.state.isShowSideDrawer}
                    closed={this.sideDrawerCloseHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </React.Fragment>
        )
    }
}

export default Layout;