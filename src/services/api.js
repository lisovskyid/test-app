import axios from "axios";

export default async ({ method, url, data = {}, headers = {}, params }) => {
  try {
    const { data: response } = await axios({
      method,
      url,
      data,
      headers,
      params,
    });

    return response;
  } catch (e) {
    return { error: e };
  }
};
