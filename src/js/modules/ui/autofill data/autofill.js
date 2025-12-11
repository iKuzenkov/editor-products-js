import { autofill } from "../../patterns/api";

export const getData = async (e) => {
  const data = await autofill("https://jsonhosting.com/api/json/8299afe0/raw");
  if (!data) return console.error("Error : Data not received");
  console.log(data);
};
