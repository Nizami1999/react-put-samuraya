import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Users.module.css";
import { usersAPI } from "../../api/api";

let Users = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount / 100; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={s.pages}>
        {pages.map(p => (
          <span
            onClick={e => {
              props.onPageChanged(p);
            }}
            className={props.currentPage === p && s.selectedPage}
          >
            {p}
          </span>
        ))}
      </div>
      {props.users.map(u => (
        <div className={s.usersPage} key={u.id}>
          <NavLink to={"/profile/" + u.id}>
            <img
              src={
                u.photos.small
                  ? u.photos.small
                  : "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
              }
              alt="user-img"
            />
          </NavLink>
          <div>{u.name}</div>
          <div>Status: {u.status ? u.status : "NO STATUS"}</div>
          <div>"u.location.country"</div>
          <div>"u.location.city"</div>
          {u.followed ? (
            <button
              onClick={() => {
                usersAPI.unfollowUser(u.id).then(res => {
                  if (res.resultCode === 0) {
                    props.unfollow(u.id);
                  }
                });
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              onClick={() => {
                usersAPI.followUser(u.id).then(res => {
                  if (res.resultCode === 0) {
                    props.follow(u.id);
                  }
                });
              }}
            >
              Follow
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Users;
