import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "8ac3a318-ceb6-4425-9f40-677e41de43bc",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(res => res.data);
  },

  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`).then(res => res.data);
  },

  followUser(userId) {
    return instance.post(`follow/${userId}`, null).then(res => res.data);
  },
};
