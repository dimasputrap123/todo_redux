import * as types from "../types";
const initiate = {
  list: [],
};
const listReducer = (state = initiate, action) => {
  switch (action.type) {
    case types.ADD_LIST:
      return { ...state, list: [...state.list, action.payload] };
    case types.REMOVE_LIST:
      /**
       * ['tes1','tes2','tes3']
       * tes3
       * ['tes1','tes2']
       */
      const list = state.list.filter((item) => {
        if (item.key !== action.payload) {
          return true;
        } else {
          return false;
        }
      });
      return { ...state, list: list };
    default:
      return state;
  }
};

export default listReducer;
