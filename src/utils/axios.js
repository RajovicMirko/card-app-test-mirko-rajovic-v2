import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const http = async (method = null, url = null, data = null) => {
  const request = {};
  if (method) request["method"] = method;
  if (url) request["url"] = url;
  if (data) request["data"] = data;

  return await axios(request);
};

export default http;
