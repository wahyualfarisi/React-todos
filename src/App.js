import React,  { Component } from 'react';
import { connect } from 'react-redux';
import Layout from './hoc/Layout/Layout';
import { Switch, Route  } from 'react-router-dom'
import Login from './containers/Auth/Login/Login';
import Todo from './containers/Todo/Todo';
import Profile from './containers/Profile/Profile';
import * as actionTypes from './store/actions';
import Logout from './containers/Auth/Logout/Logout';

class App extends Component {

  componentDidMount(){
    this.props.checkAuth()
  }

  render() {
    return (
      <div>
          <Layout isLogin={this.props.auth.isLogin}>
            <Switch>
                <Route path="/" exact component={this.props.auth.isLogin ? Todo : Login} />
                <Route path="/profile" component={Profile} />
                <Route path="/logout" component={Logout} />
            </Switch>
          </Layout>
      </div>
    );

  }
}

const mapStateToProps = state => {
    return {
      auth: state.auth
    }
}

const dispatchStateToProps = dispatch => {
  return {
    checkAuth: () => dispatch({ type: actionTypes.CHECK_AUTH } )
  }
}

export default connect(mapStateToProps, dispatchStateToProps)(App);
