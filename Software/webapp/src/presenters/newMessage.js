import { Component } from "react";
import NewMessageView from "../views/newMessageView";
import { connect } from 'react-redux';
import { setCurrentMessage } from "../store/actions/messageActions";

class NewMessage extends Component {
    state = {
        message: ""
    };

    handleChange = (e) => {
        this.setState({
            message: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.setCurrentMessage(this.state)
    };

    render() {
        return NewMessageView({handleSubmit: this.handleSubmit,
        handleChange: this.handleChange});
    };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentMessage: (newMessage) => dispatch(setCurrentMessage(newMessage))
  };
};

export default connect(null, mapDispatchToProps)(NewMessage);
