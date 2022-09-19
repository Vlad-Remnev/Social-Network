import React from 'react';
import {Content} from "./Content";
import axios from "axios";
import {connect} from "react-redux";
import {IMainUser, setUserProfile} from "../../redux/profile_reducer";
import {RootState} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

class ContentContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Content {...this.props} profile={this.props.profile}/>
        )
    }
}

type PathParamType = {
    userId: string
}

type OwnPropsType = MapStateToProps & MapDispatchToProps

type PropsType = RouteComponentProps<PathParamType> & OwnPropsType

interface MapStateToProps {
    profile: IMainUser | null
}

interface MapDispatchToProps {
    setUserProfile: (profile: IMainUser) => void
}

let mapStateToProps = (state: RootState): MapStateToProps => ({
    profile: state.profilePage.profile
})

let WithURLDataContainer = withRouter(ContentContainer)

export default connect(mapStateToProps, {setUserProfile})(WithURLDataContainer)