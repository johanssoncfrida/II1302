import React from 'react';
import { NavLink } from 'react-router-dom';
import { signOut } from '../store/actions/authActions';
import { connect } from 'react-redux';

const SignedInLinks = (props) => {
    return (
        <div className="links">
            <p className = "plinks">
                <NavLink className = "plinks" to="/currentmessage">
                    Current Message
                </NavLink>
            </p>
            <p className = "plinks">
                <NavLink className = "plinks" to="/newmessage">
                     New Message
                </NavLink>
            </p>
            <a className = "plinks" onClick={props.signOut}>Sign out</a>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);