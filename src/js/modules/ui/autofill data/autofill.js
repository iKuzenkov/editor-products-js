const URL = "https://jsonhosting.com/api/json/8299afe0/raw";
export const autofill = async () => {
  try {
    const respons = await fetch(URL);
    if (!respons.ok) throw new Error(respons.status);
    const text = await respons.json();
    const data = JSON.parse(text);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
