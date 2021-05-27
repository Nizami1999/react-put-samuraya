const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialStore = {

    posts: [
        { userName: "NizamiReact01", photo: "https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg", likes: "83", postMessage: "Hello my name is Nizami" },
        { userName: "NizamiReact01", photo: "https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg", likes: "90", postMessage: "Hello my name is" },
        { userName: "NizamiReact01", photo: "https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg", likes: "112", postMessage: "Hello my name" },
        { userName: "NizamiReact01", photo: "https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg", likes: "225", postMessage: "Hello my" }
    ],
    newPostText: ""
}
 
const profileReducer = (state = initialStore, action) =>{

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                userName: "NizamiReact01",
                photo: "https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg",
                likes: "0",
                postMessage: state.newPostText
            }
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
            
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
    
        default:
            return state;
    }
}

export const addPostActionCreator = () =>
    ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })
    
export default profileReducer