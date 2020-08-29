import * as types from "../types";
export const add_list = (payload) => {
  return {
    type: types.ADD_LIST,
    payload,
  };
};
export const remove_list = (payload) => {
  return {
    type: types.REMOVE_LIST,
    payload,
  };
};

