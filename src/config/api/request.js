import axios from "axios";
import { baseUrl } from "./url";

export const RequesGet = async (_url, data) => {
  if (data) {
    _url += "?";
    Object.keys(data).forEach((el, id) => {
      _url += el + "=" + data[el];
      //   _url += `${el}=${data[el]}`;
      if (Object.keys(data).length !== id + 1) {
        _url += "&";
      }
    });

    return axios({
      url: baseUrl + _url,
      method: "get",
    })
      .then((res) => {
        console.log("result [axios]", res);
        return res.data;
      })
      .catch((err) => console.log("err [axios]", err));
  }
};
