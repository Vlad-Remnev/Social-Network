import React from 'react';
import {Content} from "./Content";
import {connect} from "react-redux";
import {changeUserTemplate, IMainUser} from "../../redux/profile_reducer";
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
    }

    render() {
        return (
            <Content {...this.props} profile={this.props.profile}/>
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
}

interface MapDispatchToProps {
    changeUserTemplate: (userId: string) => void
}

let mapStateToProps = (state: RootState): MapStateToProps => ({
    profile: state.profilePage.profile,
})

// let WithURLDataContainer = withRouter(ContentContainer)
//
// export default withAuthRedirect(connect(mapStateToProps, {changeUserTemplate})(WithURLDataContainer))

export default compose<React.ComponentType>(
    connect(mapStateToProps, {changeUserTemplate}),
    withRouter,
    withAuthRedirect
)(ContentContainer)