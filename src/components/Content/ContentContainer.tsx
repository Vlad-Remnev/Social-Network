import React from 'react';
import {Content} from "./Content";
import {connect} from "react-redux";
import {changeUserTemplate, getStatus, IMainUser, updateStatus} from "../../redux/profile_reducer";
import {RootState} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ContentContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = '25452'
        }
        this.props.changeUserTemplate(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Content {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

// let AuthRedirectComponent = (props: PropsType) => {
//     if (!props.isAuth) return <Redirect to='/login'/>
//     return <ContentContainer {...props}/>
// }

type PathParamType = {
    userId: string
}

type OwnPropsType = MapStateToProps & MapDispatchToProps

type PropsType = RouteComponentProps<PathParamType> & OwnPropsType

interface MapStateToProps {
    profile: IMainUser | null
    status: string
}

interface MapDispatchToProps {
    changeUserTemplate: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}

let mapStateToProps = (state: RootState): MapStateToProps => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

// let WithURLDataContainer = withRouter(ContentContainer)
//
// export default withAuthRedirect(connect(mapStateToProps, {changeUserTemplate})(WithURLDataContainer))

export default compose<React.ComponentType>(
    connect(mapStateToProps, {changeUserTemplate, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ContentContainer)