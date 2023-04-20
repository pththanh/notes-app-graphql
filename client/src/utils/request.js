import { GRAPHQL_SERVER } from "./constants";

export const graphQLRequest = async (payload, options = {}) => {
  const res = await fetch(`${GRAPHQL_SERVER}/graphql`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      ...options,
    },
    body: JSON.stringify(payload),
  });

  const { data } = await res.json();
  return data;
};
