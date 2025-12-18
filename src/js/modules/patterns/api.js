/**
 * The function uses double parsing, since the API service returns text data (when using .json()).
 * @param {} URL - Adress for request.
 * @returns {Object} - Received data.
 */
export const api = async (URL) => {
  try {
    const respons = await fetch(URL);
    if (!respons.ok) throw new Error(respons.status);
    const text = await respons.json();
    const data = JSON.parse(text);
    return data;
  } catch (err) {
    console.error(err);
  }
};
