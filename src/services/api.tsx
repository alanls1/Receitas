import React from "react";

export const fechData = async function (
  queries: Array<Array<string>>,
  successCallback: (data: any) => void
) {
  const ID: string | undefined = process.env.REACT_APP_ID;
  const key: string | undefined = process.env.REACT_APP_API_KEY;
  const type: string | undefined = process.env.REACT_APP_TYPE;
  const access_point: string | undefined = process.env.REACT_APP_ACCESS_POINT;

  const query: string | undefined = queries
    .join("&")
    .replace(/,/g, "=")
    .replace(/ , /g, "&20")
    .replace(/ \+ /g, "%2B");

  const url:
    | string
    | undefined = `${access_point}?app_id=${ID}&app_key=${key}&type=${type}&${
    query ? `${query}` : ""
  }`;
  console.log(url);

  // const response: Response = await fetch(url);

  // if (response.ok) {
  //   const data = await response.json();
  //   console.log(data.hits);

  //   successCallback(data.hits);
  // }
};
