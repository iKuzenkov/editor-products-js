export const autofill = async (URL) => {
  try {
    const respons = await fetch(URL);
    if (!respons.ok) throw new Error(respons.status);
    const text = await respons.json();
    const data = JSON.parse(text);
    return data;
  } catch (err) {
    return console.error(err);
  }
};
