import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <h5>{props.userName}</h5>
            <img src={props.photo} alt="photo" />
            <form action="">
                <textarea name="" id="" cols="30" rows="10" placeholder={props.postMessage}></textarea>
            </form>
            <div className={s.likes}><strong><i>{props.likes} likes</i></strong></div><hr/>
        </div>
    )
}

export default Post;