/**
 * checking the server response
 * @param {response} - server respone data
 */
const isResponseStatus = (response) => {
  if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
};

/**
 * the function uses double parsing, since the API service (jsonhosting.com) returns json String (when using .json())
 * @param {} URL - Adress for request.
 * @returns {Object} - Received data.
 */
export const api = async (URL) => {
  const response = await fetch(URL);
  isResponseStatus(response);
  const jsonString = await response.json();
  const data = JSON.parse(jsonString);
  return data;
};
