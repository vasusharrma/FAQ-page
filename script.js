const buttonContainer = document.querySelector(".container");
const allBtn = document.querySelectorAll(".desc_btn");

buttonContainer.addEventListener("click", (element) => {
  let btnclick = element.target.classList.contains("desc_btn");

  if (btnclick) {

    allBtn.forEach((e)=>{
    let descPara = e.closest('.items').children[1];
        console.log(descPara);
        if(descPara.classList.contains('active') && (e != element.target)){
            descPara.classList.remove('active');
        }
    })

    element.target.classList.toggle("rotate");
    const parentElement = element.target.closest(".items");
    parentElement.children[1].classList.toggle("active");
  }
});
