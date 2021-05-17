import React from 'react';
import { connect } from 'react-redux';
import SignedInLinks from './signedInLink';
import SignedOutLinks from './signedOutLink';
import HeaderView from "../views/headerView";

const Header = (props) => {
    const { auth, profile } = props;
    const authenticated = auth.uid;
    const links = authenticated ? (
        <SignedInLinks /> 
    ) : (
        <SignedOutLinks />
    );
    const goTo = auth.uid ? "currentmessage" : "/";

    return HeaderView({ goTo, links, authenticated, firstName: profile.firstname, lastName: profile.lastname });
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
    };
};
 
export default connect(mapStateToProps)(Header);