import React from 'react';
import s from './Users.module.css';

const Users = (props) => {

    if(!props.users.length){
        props.setUsers(
            [
                { id: 1, photoURL: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png', followed: true, fullName: 'Nizami', status: 'I am Nizami', location: { city: 'Baku', country: 'Azerbaijan' } },
                { id: 2, photoURL: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png', followed: false, fullName: 'Habib', status: 'I am Habib', location: { city: 'NY', country: 'USA' } },
                { id: 3, photoURL: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png', followed: true, fullName: 'Farid', status: 'I am Farid', location: { city: 'Naxcivan', country: 'Azerbaijan' } },
            ]
        )
    }

    return (
        <div>
            {
                props.users.map(u =>

                    <div className={s.usersPage} key={u.id}>
                        <img src={u.photoURL} alt="user-img" />
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
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