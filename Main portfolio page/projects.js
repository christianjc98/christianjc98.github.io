console.log("Hello world");
const projects = [
    {
      id: 1, 
      title: "Marvel API Project",
      img: "marvel_project.png",
      description: "Website connected to the Marvel API to search information about any vharacter of the Marvel comics.",
      link: "https://christianjc98.github.io/marvel.github.io/"
    },
    {
        id: 2, 
        title: "Menu Project",
        img: "menu-project.png",
        description: "Digital menu for a local coffe shop",
        link: "https://christianjc98.github.io/Menu_project/"

      }
]
const projectContainer = document.querySelector(".projects-container");
window.addEventListener("DOMContentLoaded", () => {
  let displayProjetcs = projects.map((item) => {
      return ` <div class="project-item">
      <h3>${item.title}</h3>
      <img src="${item.img}" alt="project-img">
      <p>${item.description}</p>
      <button><a href="${item.link}" target="_blank">Check it out!</a></button>
  </div>`
  })
  displayProjetcs = displayProjetcs.join("");
  projectContainer.innerHTML = displayProjetcs;
  
})