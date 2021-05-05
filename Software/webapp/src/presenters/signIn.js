import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../store/actions/authActions';
import { Redirect } from 'react-router-dom';
import SignInView from "../views/signInView";

class SignIn extends Component {
    state = {
        email: "",
        password: "",
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    };

    render() {
        const { auth, authError } = this.props;
        if (auth.uid) {
            return <Redirect to="/currentmessage" />;
        } else {
            return SignInView({
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit,
                authError,
            });
        };
    };
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials)),
    };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);