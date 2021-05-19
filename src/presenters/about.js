import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AboutView from "../views/aboutView";

class About extends Component {
    
    render () {
        const { auth } = this.props;
        if (auth.uid) {
            return <Redirect to="/currentmessage" />;
        } else {
            return AboutView();
        };
    };
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    };
};

export default connect(mapStateToProps, null)(About);