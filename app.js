const toggleBtn = document.querySelectorAll(".toggle-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.forEach( (btn) => {
  btn.addEventListener("click", () => {
    sidebar.classList.toggle("show-sidebar")  
  });
});


window.addEventListener("scroll", ()=> {
  if(sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.remove("show-sidebar");
  }
})

//Set date

const date = document.querySelector(".date")
date.innerHTML = new Date().getFullYear();

//Smooth scroll
const navbar = document.querySelector(".nav-center")

function checkWidth() {
  if(window.innerWidth > 1000) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed")
  }
}

window.addEventListener("resize", ()=>{
  checkWidth()
})

window.addEventListener("DOMContentLoaded", ()=> {
  checkWidth();
})
 
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link)=> {
  link.addEventListener("click", (e)=> {
    if (navbar.classList.contains("fixed")) {
      e.preventDefault();
      //navigate to specific
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        const navHeight = document.querySelector(".nav-center").getBoundingClientRect().height;
        let position = element.offsetTop -navHeight;

        window.scrollTo({
          left: 0,
          top: position,
        });
    }
  }) 
})

//Form validation 

const label = document.querySelectorAll(".form-label");
const input = document.querySelectorAll(".form-input");
const form = document.querySelector(".contact-form");
let showAlert = true



form.addEventListener("submit", (e) => {
  let index = 0;
  input.forEach((item) => {
    if (item.value === "" || item.value == null) {
      e.preventDefault();
      item.classList.add("red-input");
      if (showAlert == true) {
        alert("please fill the requiered information");
      }
    } else {
      item.classList.remove("red-input")
    }
    showAlert = false;
    
    if(item.classList.contains("red-input")) {
      label[index].classList.add("red-label")
    } else {
      label[index].classList.remove("red-label")
    } 
    index++;
  })
})