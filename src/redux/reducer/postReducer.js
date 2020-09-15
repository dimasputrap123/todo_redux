import * as types from "../types";
const initiate = {
  post: [],
  comments: [],
};
const postReducer = (state = initiate, action) => {
  const { payload } = action;
  switch (action.type) {
    case types.POST_RD:
      return { ...state, post: payload };
    case types.COMMENT_RD:
      return { ...state, comments: payload };
    default:
      return state;
  }
};

export default postReducer;
