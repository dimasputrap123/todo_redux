import * as types from "../types";

export const get_post = (payload) => {
  return {
    type: types.POST_LG,
    payload,
  };
};
export const get_comment = (payload) => {
  return {
    type: types.COMMENT_LG,
    payload,
  };
};
export const store_post = (payload) => {
  return {
    type: types.POST_RD,
    payload,
  };
};
export const store_comment = (payload) => {
  return {
    type: types.COMMENT_RD,
    payload,
  };
};
