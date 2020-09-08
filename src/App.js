import React,  { Component } from 'react';
import { connect } from 'react-redux';
import Layout from './hoc/Layout/Layout';
import { Switch, Route, Redirect  } from 'react-router-dom'
import Login from './containers/Auth/Login/Login';
import Todo from './containers/Todo/Todo';
import * as actions from './store/actions/index';
import Logout from './containers/Auth/Logout/Logout';
import Register from './containers/Auth/Register/Register';

class App extends Component {

  componentDidMount(){
    
    this.props.checkAuth()
  }

  render() {
    let routes = (
      <Switch>
         <Route path="/" exact component={Login} />
         <Route path="/register" component={Register} />
         <Redirect to="/" />
      </Switch>
    );

    if(this.props.auth.isLogin){
     routes = (
        <Switch>
            <Route path="/" exact component={Todo} />
            <Route path="/logout" component={Logout} />
            <Redirect to="/" />
        </Switch>
       );
    };

    return (
      <div>
          <Layout isLogin={this.props.auth.isLogin}>
            {routes}
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
    checkAuth: () => dispatch( actions.authCheckState() )
  }
}

export default connect(mapStateToProps, dispatchStateToProps)(App);
