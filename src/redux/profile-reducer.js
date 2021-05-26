const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
 
const profileReducer = (state, action) =>{

    if (action.type === ADD_POST) {
        let newPost = {
            userName: "NizamiReact01",
            photo: "https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg",
            likes: "0",
            postMessage: state.newPostText
        }
        state.posts.push(newPost);
        state.newPostText = "";
    }
    else if(action.type === UPDATE_NEW_POST_TEXT){
        state.newPostText = action.newText;
    }
    return state;
}

export default profileReducer