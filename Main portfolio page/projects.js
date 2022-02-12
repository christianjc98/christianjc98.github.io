console.log("Hello world");
const projects = [
  {
    id: 1,
    title: "Marvel API Project",
    img: "marvel_project.png",
    description:
      "Website connected to the Marvel API to search information about any vharacter of the Marvel comics.",
    link: "https://christianjc98.github.io/marvel.github.io/",
  },
  {
    id: 2,
    title: "Menu Project",
    img: "menu-project.png",
    description: "Digital menu for a local coffe shop",
    link: "https://christianjc98.github.io/Menu_project/",
  },
  {
    id: 3,
    title: "Weather Project",
    img: "weather-project.png",
    description:
      "Website connected to OpenWeatherAPI to display the weather of mexican cities",
    link: "https://christianjc98.github.io/climaMexico/",
  },
  {
    id: 4,
    title: "Animation Project",
    img: "animation-project.png",
    description: "Loading animation for webpage builded with anime.js",
    link: "https://christianjc98.github.io/AnimacionPrueba/",
  },
  {
    id: 5,
    title: "Chajaal E-commerce site",
    img: "ecommerce-project.png",
    description: "Front End of a E-commerce webpage",
    link: "https://christianjc98.github.io/ChaajalHamacas-E-commerce/",
  },
  {
    id: 6,
    title: "React Football searcher",
    img: "football-project.png",
    description: "Football app builded with React connected to an API",
    link: "https://christianjc98.github.io/football-app/",
  },
  {
    id: 7,
    title: "React Mini Projects",
    img: "MiniProjects-project.png",
    description: "Mini projects builded with React while learning",
    link: "https://christianjc98.github.io/React-Mini-Projects/",
  },
];
const projectContainer = document.querySelector(".projects-container");
window.addEventListener("DOMContentLoaded", () => {
  let displayProjetcs = projects.map((item) => {
    return ` <div class="project-item">
      <h3>${item.title}</h3>
      <img src="${item.img}" alt="project-img">
      <p>${item.description}</p>
      <button><a href="${item.link}" target="_blank">Check it out!</a></button>
  </div>`;
  });
  displayProjetcs = displayProjetcs.join("");
  projectContainer.innerHTML = displayProjetcs;
});

const holaBtn = document.querySelector(".hola-btn");
