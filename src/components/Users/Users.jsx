import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios'

const Users = (props) => {

    let getUsers = () =>{
        if (!props.users.length) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(res => {
                props.setUsers(res.data.items);
            })
        }
    }

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {
                props.users.map(u =>

                    <div className={s.usersPage} key={u.id}>
                        <img src={u.photos.small ? u.photos.small : 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'} alt="user-img" />
                        <div>{u.name}</div>
                        <div>Status: {u.status ? u.status : 'NO STATUS'}</div>
                        <div>"u.location.country"</div>
                        <div>"u.location.city"</div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Users;