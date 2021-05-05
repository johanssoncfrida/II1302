import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../store/actions/authActions';
import SignUpView from '../views/signUpView';

class SignUp extends Component {
    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    };

    render() {
        const { auth, authError } = this.props;

        if (auth.uid) {
            return <Redirect to="/currentmessage" />;
        } else {
            return SignUpView({
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit,
                authError,
            });
        };
    };
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);