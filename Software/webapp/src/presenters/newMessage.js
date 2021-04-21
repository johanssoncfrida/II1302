import React, {Component } from "react";
import NewMessageView from "../views/newMessageView";
import firebase from "firebase/app";
import "firebase/database";

class NewMessage extends Component {
    state = {
        message: ""
    }

    handleChange = (e) => {
        this.setState({
            message: e.target.value
        })
      };

    handleSubmit = (e) => {
        e.preventDefault();
        firebase.database().ref("message").set(this.state);
      };

      render() {
        return NewMessageView({handleSubmit: this.handleSubmit,
        handleChange: this.handleChange});
      }
}


export default NewMessage;
