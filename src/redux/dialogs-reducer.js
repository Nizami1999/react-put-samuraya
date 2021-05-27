const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let initialStore = {

    dialogs: [
        { id: "1", name: "Hebib" },
        { id: "2", name: "Ferid" },
        { id: "3", name: "Perviz" },
        { id: "4", name: "Senan" }
    ],

    messages: [
        { id: "1", message: "Pubg?" },
        { id: "2", message: "React?" },
        { id: "3", message: "Umbuluw?" },
        { id: "4", message: "Zdarova?" }
    ],

    newMessageBody: ""
}

const dialogsReducer = (state = initialStore, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.messages.push({ id: 6, message: body });
            state.newMessageBody = "";
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
    
        default:
            return state;
    }
    return state
}

export const sendMessageCreator = () =>
    ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer