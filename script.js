const buttonContainer = document.querySelector(".container");
const allBtn = document.querySelectorAll(".desc_btn");

buttonContainer.addEventListener("click", (element) => {
  let btnclick = element.target.classList.contains("desc_btn");
  element.target.classList.toggle("rotate");
console.log(element);

  if (btnclick) {
    const parentElement = element.target.closest(".items");
    parentElement.children[1].classList.toggle("active");
  }
});
