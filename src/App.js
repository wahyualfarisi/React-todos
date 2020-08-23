import React,  { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import { BrowserRouter, Switch, Route  } from 'react-router-dom'
import Login from './containers/Auth/Login/Login';

class App extends Component {

  state = {
    
  }

  render() {
    return (
      <BrowserRouter>
          <Layout>
            <Switch>
                <Route path="/" exact component={Login} />
            </Switch>
          </Layout>
      </BrowserRouter>
    );

  }
}

export default App;
