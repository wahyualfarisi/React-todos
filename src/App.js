import React,  { useEffect, lazy, Suspense, useCallback } from 'react';
import { connect } from 'react-redux';
import Layout from './hoc/Layout/Layout';
import { Switch, Route, Redirect  } from 'react-router-dom'
import Login from './containers/Auth/Login/Login';
import * as actions from './store/actions/index';
import Spinner from './components/UI/Spinner/Spinner';

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

  const check = useCallback(() => {
      props.checkAuth()
  }, [props])

  

  useEffect(check, [])

  
  let routes = (
    <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" render={() => (
          <Suspense fallback={<div className="loading-bottom"><Spinner /> </div>}> 
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
            <Suspense fallback={<div className="loading-bottom"><Spinner /> </div>}> 
              <AsyncTodo /> 
            </Suspense>
          )} />
          <Route path="/logout" render={() => (
            <Suspense fallback={<div className="loading-bottom"><Spinner /> </div>}> 
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
