import axios from "axios";

import isDev from "../utils/DevDetect";

export const parserResponse = async (
  response,
  parserTest,
  parserProduction
) => {
  if (isDev()) {
    return await parserTest(response);
  } else {
    return await parserProduction(response);
  }
};

export const get = async (url, parserTest, parserProduction) => {
  const response = await axios.get(url);
  return await parserResponse(response, parserTest, parserProduction);
};

export const post = async (url, data, parserTest, parserProduction) => {
  return await parserResponse(
    await axios.post(url, data),
    parserTest,
    parserProduction
  );
};
