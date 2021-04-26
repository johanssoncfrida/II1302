import { Component } from "react";
import CurrentMessageView from "../views/currentMessageView";
import firebase from "firebase/app";
import "firebase/database";

class CurrentMessage extends Component {
  state = {
    currentMessage: ""
  }
  componentDidMount() {
    const dbRef = firebase.database().ref("message");
    dbRef.get().then((snapshot) => {
      if (snapshot.exists()) {
        this.setState({ currentMessage: snapshot.val().message });
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
    console.error(error);
  });
  }


  render() {
    if (this.state.currentMessage) {
      return CurrentMessageView({currentMessage: this.state.currentMessage});
    }
    else
     return <div></div>
    
  }
}


export default CurrentMessage;
