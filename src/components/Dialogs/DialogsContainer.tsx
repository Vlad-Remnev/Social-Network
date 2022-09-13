import React from 'react';
import {Dispatch} from "redux";
import {IDialogsAll, RootState} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogs_reducer";
import {connect} from "react-redux";


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
        messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        onAddMessage: () => {
            dispatch(addMessageActionCreator())
        },
        onMessageChange: (text) => {
            dispatch(updateMessageActionCreator(text))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);