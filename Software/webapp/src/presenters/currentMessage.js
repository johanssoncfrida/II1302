import { Component } from "react";
import CurrentMessageView from "../views/currentMessageView";
import { connect } from 'react-redux';
import { getCurrentMessage } from "../store/actions/messageActions";

class CurrentMessage extends Component {
  
  componentDidMount() {
    // Updates the Redux store with the message currently 
    // stored in Firebase Realtime Database
    this.props.getCurrentMessage();
  };

  render() {
    // Using Redux to get current message
    const { currentMessage } = this.props;
    if (currentMessage) {
      return CurrentMessageView({ currentMessage: currentMessage });
    } else {
      return <div></div>;
    };
  };
}

const mapStateToProps = (state) => {
  return { 
    currentMessage: state.message.currentMessage
  };
};

const mapDispatchToProps = (dispatch) => {
  return { 
    getCurrentMessage: () => dispatch(getCurrentMessage())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentMessage);
