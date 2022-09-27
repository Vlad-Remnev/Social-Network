import React from 'react';
import {RootState} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {IDialogsAll, onAddMessage, onMessageChange} from "../../redux/dialogs_reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


// interface IDialogsContainer {
//     store:Store<RootState>
// }

// export const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 const state = store.getState().messagesPage
//                 const onAddMessage = () => {
//                     store.dispatch.call(store, addMessageActionCreator())
//                 }
//                 const onMessageChange = (text: string) => {
//                     store.dispatch.call(store, updateMessageActionCreator(text))
//                 }
//
//                 return (
//                     <Dialogs state={state} onAddMessage={onAddMessage} onMessageChange={onMessageChange}/>
//                 )
//             }}
//         </StoreContext.Consumer>
//
//     );
// };

interface MapStateToProps {
    messagesPage: IDialogsAll
}

interface MapDispatchToProps {
    onAddMessage: () => void,
    onMessageChange: (text: string) => void
}

export type DialogsPropsType = MapStateToProps & MapDispatchToProps

let mapStateToProps = (state: RootState): MapStateToProps => {
    return {
        messagesPage: state.messagesPage,
    }
}

// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
//     return {
//         onAddMessage: () => {
//             dispatch(addMessageActionCreator())
//         },
//         onMessageChange: (text) => {
//             dispatch(updateMessageActionCreator(text))
//         }
//     }
// }

// let AuthRedirectComponent = (props: DialogsPropsType) => {
//     if (!props.isAuth) return <Redirect to='/login'/>
//     return <Dialogs {...props}/>
// }

// compose(withAuthRedirect)(Dialogs)
//
// export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, {
//     onAddMessage,
//     onMessageChange
// })(Dialogs));
// export default compose(connect(mapStateToProps, {onAddMessage, onMessageChange}), withAuthRedirect(Dialogs))

export default compose<React.ComponentType>(
    connect(mapStateToProps, {onAddMessage, onMessageChange}),
    withAuthRedirect
)(Dialogs)