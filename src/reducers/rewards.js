import { SET_REWARDS } from "../actions/rewards";

const initialState = {
  list: [],
  uniqStatuses: [],
};

const rewardsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_REWARDS:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};

export default rewardsReducer;
