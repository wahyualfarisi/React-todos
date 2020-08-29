import React,  { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import { Switch, Route  } from 'react-router-dom'
import Login from './containers/Auth/Login/Login';
import AuthService from './services/auth_service';
import Todo from './containers/Todo/Todo';
import Profile from './containers/Profile/Profile';
import Logout from './containers/Auth/Logout/Logout';

class App extends Component {

  state = {
      currentUser: undefined,
      isLogin: false,
      loading: true
  }

  componentDidMount(){
    
    const user = AuthService.getCurrentUser()
   
    if(user){
      this.setState({
        currentUser: user,
        isLogin: true,
        loading: false
      }); 
    }
    
  }

  render() {
   
    return (
      <div>
          <Layout isLogin={this.state.isLogin}>
            <Switch>
                <Route path="/" exact component={this.state.isLogin ? Todo : Login} />
                <Route path="/profile" component={Profile} />
                <Route path="/logout" component={Logout} />
            </Switch>
          </Layout>
      </div>
    );

  }
}

export default App;
