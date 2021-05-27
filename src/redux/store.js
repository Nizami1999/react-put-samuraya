import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";



let store = {

    _state: {

        dialogsPage: {

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
        },

        profilePage: {

            posts: [
                { userName: "NizamiReact01", photo: "https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg", likes: "83", postMessage: "Hello my name is Nizami" },
                { userName: "NizamiReact01", photo: "https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg", likes: "90", postMessage: "Hello my name is" },
                { userName: "NizamiReact01", photo: "https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg", likes: "112", postMessage: "Hello my name" },
                { userName: "NizamiReact01", photo: "https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg", likes: "225", postMessage: "Hello my" }
            ],
            newPostText: ""
        }
    },

    _callSubscriber() {
        console.log("State changed");
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
        } 
    }

window.store = store;
export default store;