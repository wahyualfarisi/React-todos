import React,  { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import { BrowserRouter, Switch, Route  } from 'react-router-dom'
import Login from './containers/Auth/Login/Login';
import AuthService from './services/auth_service';
import Todo from './containers/Todo/Todo';

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

  componentDidUpdate(){
    console.log('cdupdated')
  }

  render() {
   
    return (
      <BrowserRouter>
          <Layout>
            <Switch>
                <Route path="/" exact component={this.state.isLogin ? Todo : Login} />
                <Route path="/login"  component={() => {
                  if(!this.state.isLogin) {
                    return ( <Login /> )
                  }else{
                    return ( <Todo /> )
                  }
                }} />
            </Switch>
          </Layout>
      </BrowserRouter>
    );

  }
}

export default App;
