const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {

    posts: [
        { userName: "NizamiReact01", photo: "https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg", likes: "83", postMessage: "Hello my name is Nizami" },
        { userName: "NizamiReact01", photo: "https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg", likes: "90", postMessage: "Hello my name is" },
        { userName: "NizamiReact01", photo: "https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg", likes: "112", postMessage: "Hello my name" },
        { userName: "NizamiReact01", photo: "https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg", likes: "225", postMessage: "Hello my" }
    ],
    newPostText: ""
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            if (state.newPostText) {
                
                let newPost = {
                    userName: "NizamiReact01",
                    photo: "https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg",
                    likes: "0",
                    postMessage: state.newPostText
                }

                return {
                    ...state,
                    newPostText: "",
                    posts: [...state.posts, newPost]
                };
            }

        case UPDATE_NEW_POST_TEXT:

            return {
                ...state,
                newPostText: action.newText
            };

        default:
            return state;
    }
}

export const addPostActionCreator = () =>
    ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer