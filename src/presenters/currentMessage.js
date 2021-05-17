import { Component } from "react";
import CurrentMessageView from "../views/currentMessageView";
import { connect } from 'react-redux';
import { getCurrentMessage } from "../store/actions/messageActions";
import { Redirect } from "react-router";

class CurrentMessage extends Component {
  
  componentDidMount() {
    // Updates the Redux store with the message currently 
    // stored in Firebase Realtime Database
    this.props.getCurrentMessage();
  };

  render() {
    // Using Redux to get current message
    const { currentMessage, auth } = this.props;

    if (!auth.uid) {
      return <Redirect to="/"/>
    } else {
      if (currentMessage) {
        return CurrentMessageView({ currentMessage: currentMessage });
      } else {
        return CurrentMessageView({ currentMessage: "No current message." });
      };
    };
  };
}

const mapStateToProps = (state) => {
  return { 
    currentMessage: state.message.currentMessage,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { 
    getCurrentMessage: () => dispatch(getCurrentMessage())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentMessage);
