import { Component } from "react";
import NewMessageView from "../views/newMessageView";
import { connect } from 'react-redux';
import { setCurrentMessage } from "../store/actions/messageActions";
import { Redirect } from "react-router";

class NewMessage extends Component {
    state = {
        message: ""
    };

    handleChange = (e) => {
        this.setState({
            message: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.setCurrentMessage(this.state)
    };

    render() {
        const { auth } = this.props;

        if (!auth.uid) {
            return <Redirect to="/"/>
        } else {
            return NewMessageView({ handleSubmit: this.handleSubmit,
                handleChange: this.handleChange 
            });
        };
    };
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentMessage: (newMessage) => dispatch(setCurrentMessage(newMessage))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMessage);
