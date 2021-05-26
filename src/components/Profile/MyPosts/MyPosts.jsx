import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';

const MyPosts = (props) => {

    let postsElement = props.profilePage.map(p => <Post userName = {p.userName} photo = {p.photo} likes = {p.likes} postMessage = {p.postMessage}/>);
    let newPostElement = React.createRef();

    let addPost = () =>{
        // props.addPost();
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () =>{
        // props.updateNewPostText(text);
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div>
            <form>
                <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement} cols="100" rows="10" placeholder="Add new post..."></textarea>
                <button type="button" onClick = {addPost} className={s.btn} >Add</button>
                <button type="reset" className={s.btn} >Reset</button>
            </form>

            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts; 