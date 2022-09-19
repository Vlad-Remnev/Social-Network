import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import axios from "axios";
import {RootState} from "../../redux/redux-store";
import {IAuth, setAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
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
    setAuthUserData: (userId: number, email: string, login: string) => void
}

const mapStateToProps = (state: RootState): MapStateToProps => ({
    userMe: state.auth
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)