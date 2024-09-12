const btnToggle = document.querySelector(".btnToggle");
const [topEl, middleEl, bottomEl] = btnToggle.querySelectorAll("div");

btnToggle.addEventListener("click", () => {
  btnToggle.classList.toggle("on");
});
