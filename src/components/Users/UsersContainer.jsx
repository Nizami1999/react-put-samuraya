import React from "react";
import { connect } from "react-redux";
import {
  followUser,
  setUsers,
  unfollowUser,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  getUsers,
  pageChange
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = pageNumber => {
    this.props.pageChange(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching && <Preloader />}
        <Users {...this.props} onPageChanged={this.onPageChanged} />
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

// let mapDispatchToProps = (dispatch) => {                 Мы сократили его
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCount(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps, {
  followUser,
  unfollowUser,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  getUsers,
  pageChange
})(UsersContainer);
