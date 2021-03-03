import { rerenderEntireTree } from "../render";

let state = {

    dialogsPage : {

        dialogs : [
            { id: "1", name: "Hebib" },
            { id: "2", name: "Ferid" },
            { id: "3", name: "Perviz" },
            { id: "4", name: "Senan" }
        ],

        messages : [
            { id: "1", message: "Pubg?" },
            { id: "2", message: "React?" },
            { id: "3", message: "Umbuluw?" },
            { id: "4", message: "Zdarova?" }
        ],
    },

    profilePage : {

        posts : [
            { userName: "NizamiReact01", photo: "https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg", likes: "83", postMessage: "Hello my name is Nizami" },
            { userName: "NizamiReact01", photo: "https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg", likes: "90", postMessage: "Hello my name is" },
            { userName: "NizamiReact01", photo: "https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg", likes: "112", postMessage: "Hello my name" },
            { userName: "NizamiReact01", photo: "https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg", likes: "225", postMessage: "Hello my" }
        ],
        newPostText: ""
    }
}

export let addPost = () =>{
    let newPost = {
        userName: "NizamiReact01",
        photo: "https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg",
        likes: "0",
        postMessage: state.profilePage.newPostText 
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText="";
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) =>{
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;