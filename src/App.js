import React,  { Component } from 'react';
import { connect } from 'react-redux';
import Layout from './hoc/Layout/Layout';
import { Switch, Route  } from 'react-router-dom'
import Login from './containers/Auth/Login/Login';
import Todo from './containers/Todo/Todo';
import Profile from './containers/Profile/Profile';
import * as actionTypes from './store/actions/types';
import Logout from './containers/Auth/Logout/Logout';
import Register from './containers/Auth/Register/Register';

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
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/logout" component={Logout} />
                <Route render={() => <h1> Page Not Found </h1>} />
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
