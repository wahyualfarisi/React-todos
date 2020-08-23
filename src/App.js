import React,  { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import { BrowserRouter, Switch, Route  } from 'react-router-dom'
import Login from './containers/Auth/Login/Login';
import AuthService from './services/auth_service';
import Todo from './containers/Todo/Todo';

class App extends Component {

  state = {
    currentUser: undefined,
    loading: true 
  }

  componentDidMount(){
   const user = AuthService.getCurrentUser()
   
    if(user){
      this.setState({
        currentUser: user
      });
      
    }

  }

  render() {
    

    return (
      <BrowserRouter>
          <Layout>
            <Switch>
                <Route path="/" exact component={this.state.currentUser ? Todo : Login} />
                <Route path="/todo" component={Todo} />
            </Switch>
          </Layout>
      </BrowserRouter>
    );

  }
}

export default App;
