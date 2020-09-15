import { createLogic } from "redux-logic";
import { RequesGet } from "../../config/api/request";
import * as types from "../types";
import url from "../../config/api/url";
import { store_post } from "../action/postAction";

export const fetch_post = createLogic({
  type: types.POST_LG,
  latest: true,
  async process({ action, getState }, dispatch, done) {
    // action.payload
    // const { list } = getState().listReducer;
    console.log("logic");
    RequesGet(url.photos, {
      _limit: 10,
    })
      .then((res) => {
        console.log("res [logicpost]", res);
        dispatch(store_post(res));
      })
      .catch((err) => console.log(err))
      .then(done);
  },
});
// debounce
