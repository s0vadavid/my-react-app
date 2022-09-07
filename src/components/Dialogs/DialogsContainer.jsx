import React from 'react';
import s from './Dialogs.module.css';
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {store => {
            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            }
            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body));
            }

            return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
                dialogPage={store.getState().dialogPage} />
        }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;