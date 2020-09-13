import React,  { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import Layout from './hoc/Layout/Layout';
import { Switch, Route, Redirect  } from 'react-router-dom'
import Login from './containers/Auth/Login/Login';
import * as actions from './store/actions/index';

const AsyncTodo = lazy( () => {
  return import('./containers/Todo/Todo');
});

const AsyncLogout = lazy( () => {
  return import('./containers/Auth/Logout/Logout');
});

const AsyncRegister = lazy( () => {
  return import('./containers/Auth/Register/Register');
})


const App = props => {

  useEffect( () => {

    const check = () => {
      props.checkAuth()
    }

    check()
  }, [])

  
  let routes = (
    <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" render={() => (
          <Suspense fallback={<div>...Loading</div>}> 
            <AsyncRegister /> 
          </Suspense> 
        )} />
        <Redirect to="/" />
    </Switch>
  );

  if(props.auth.isLogin){
    routes = (
      <Switch>
          <Route path="/" exact render={() => (
            <Suspense fallback={<div>...Loading</div>}> 
              <AsyncTodo /> 
            </Suspense>
          )} />
          <Route path="/logout" render={() => (
            <Suspense fallback={<div>...Loading</div>}> 
              <AsyncLogout /> 
            </Suspense> 
          )} />
          <Redirect to="/" />
      </Switch>
      );
  };

  return (
    <div>
        <Layout isLogin={props.auth.isLogin}>
          {routes}
        </Layout>
    </div>
  );

}

const mapStateToProps = state => {
    return {
      auth: state.auth
    }
}

const dispatchStateToProps = dispatch => {
  return {
    checkAuth: () => dispatch( actions.authCheckStatus() )
  }
}

export default connect(mapStateToProps, dispatchStateToProps)(App);
