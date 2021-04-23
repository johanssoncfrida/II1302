import LoginPage from "../views/LoginPage";
import LoginView from "../views/LoginView";
import { Component } from "react";

class LoginPresenter extends Component{
    state = {
        Pushed : false
      }
      handleButtonLogin = (e) =>{
        this.setState({
            Pushed: true
        })
      }
      handleButtonLoginView =(e) => {
        this.setState({
            Pushed: false
        })
      }
    render(){
        if(!this.state.Pushed) 
            return <LoginPage handleButton= {this.handleButtonLogin}/>
        else
            return <LoginView handleButton ={this.handleButtonLoginView}/>  
    }
    
}
 
export default LoginPresenter;