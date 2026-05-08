/**
 * checking the server response
 * @param {response} - server respone data
 */
const isResponseStatus = (response) => {
  if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
};

/**
 * @param {} URL - Adress for request.
 * @returns {Object} - Received data.
 */
export const api = async (URL) => {
  const response = await fetch(URL);
  isResponseStatus(response);
  const data = await response.json();
  return data;
};
