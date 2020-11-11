export const SET_USERS = "SET_USERS";

export const setUsers = (data) => {
  return {
    type: SET_USERS,
    payload: data,
  };
};
