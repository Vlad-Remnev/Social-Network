import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {IAuth, authMainUser} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.authMainUser()
    }

    render() {
        return <Header email={this.props.userMe.email} userId={this.props.userMe.userId} login={this.props.userMe.login} isAuth={this.props.userMe.isAuth}/>;
    }
}

type PropsType = MapStateToProps & MapDispatchToProps

interface MapStateToProps {
    userMe: IAuth
}

interface MapDispatchToProps {
    authMainUser: () => void
}

const mapStateToProps = (state: RootState): MapStateToProps => ({
    userMe: state.auth
})

export default connect(mapStateToProps, {authMainUser})(HeaderContainer)