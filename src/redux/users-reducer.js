import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_USERS_COUNT = "SET-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            };

        case UNFOLLOW: 
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            };

        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage 
            }

        case SET_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count 
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching  
            }
        

        default:
            return state;
    }
}

export const follow = (userId) =>
    ({ type: FOLLOW, userId })
export const unfollow = (userId) =>
    ({ type: UNFOLLOW, userId })
export const setUsers = (users) =>
    ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) =>
    ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (count) =>
    ({ type: SET_USERS_COUNT, count })
export const toggleIsFetching = (isFetching) =>
({ type: TOGGLE_IS_FETCHING, isFetching })


export const getUsers = (currentPage, pageSize) => {
  return dispatch => {
    dispatch(toggleIsFetching(true));

    usersAPI.getUsers(currentPage, pageSize).then(res => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(res.items));
      dispatch(setTotalUsersCount(res.totalCount));
    });
  };
};

export const pageChange = (pageNumber, pageSize) => {
  return dispatch => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(pageNumber));

    usersAPI.getUsers(pageNumber, pageSize).then(res => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(res.items));
    });
  };
};

export const unfollowUser = userId => {
  return dispatch => {
    usersAPI.unfollowUser(userId).then(res => {
      if (res.resultCode === 0) {
        dispatch(unfollow(userId));
      }
    });
  };
};

export const followUser = userId => {
  return dispatch => {
    usersAPI.followUser(userId).then(res => {
      if (res.resultCode === 0) {
        dispatch(follow(userId));
      }
    });
  };
};

export default usersReducer;