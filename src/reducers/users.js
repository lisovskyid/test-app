import { SET_USERS } from "../actions/users";

const initialState = [];

const usersReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USERS:
      return [...payload];

    default:
      return state;
  }
};

export default usersReducer;
