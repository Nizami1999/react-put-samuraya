import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
            this.props.setUsers(res.data.items);
            this.props.setTotalUsersCount(res.data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(res => { 
            this.props.setUsers(res.data.items);
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount/100; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div className={s.pages}>
                    {
                        pages.map(p => <span onClick={(e) => {this.onPageChanged(p)}} className={this.props.currentPage === p && s.selectedPage}>{p}</span>)
                    }
                </div>
                {
                    this.props.users.map(u =>

                        <div className={s.usersPage} key={u.id}>
                            <img src={u.photos.small ? u.photos.small : 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'} alt="user-img" />
                            <div>{u.name}</div>
                            <div>Status: {u.status ? u.status : 'NO STATUS'}</div>
                            <div>"u.location.country"</div>
                            <div>"u.location.city"</div>
                            {u.followed
                                ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>
                            }
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Users;