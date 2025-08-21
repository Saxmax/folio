// Set year dynamically (at bottom, by copyright notice)
document.getElementById("year").textContent = new Date().getFullYear();

const sections = {
  about: "section-about",
  projects: "section-projects",
  contact: "section-contact",
};

let projects = [];

function fetchPages() {
  const sectionKeys = Object.keys(sections);
  for (const section of sectionKeys) {
    fetch(`sections/${section}.html`)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById(`section-${section}`).innerHTML = html;

      if(section == sectionKeys[sectionKeys.length - 1]) {
        loadProjects();
      }
    });
  }
}

function loadProjects() {
  projects = document.getElementsByName("project");
  projects.forEach((project) => {
    project.addEventListener("click", (e) => {
      if (e.target === project) hideProject(project.id);
    });
  });
}

function showProject(cardId) {
  projects.forEach((project) => {
    if (project.id == cardId) {
      project.classList.remove("hidden");
    }
  });
}

function hideProject(cardId) {
  projects.forEach((project) => {
    if (project.id == cardId) {
      project.classList.add("hidden");
    }
  });
}

function hideAllProjects() {
  projects.forEach((project) => project.classList.add("hidden"));
}

fetchPages();