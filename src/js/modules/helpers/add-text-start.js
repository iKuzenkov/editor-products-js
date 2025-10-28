export const addTextStart = (e) => {
  const section = e.target.closest(".section-main");
  const inputValue = section.querySelector(".input-function").value;
  const productInputs = Array.from(section.querySelectorAll(".input-product"));
  const filteredInputs = productInputs.filter((el) => el.dataset.action);
  const unitedValue = filteredInputs
    .map((el) => el.value.trim())
    .filter((el) => el !== "")
    .map((val) => `${val} ${inputValue}`);
  filteredInputs.forEach((input, i) => {
    input.value = unitedValue[i];
  });
};
