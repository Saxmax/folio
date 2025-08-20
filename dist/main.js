const projects = document.getElementsByName("project");
projects.forEach((project) => {
  project.addEventListener("click", (e) => {
    if (e.target === project) hideProject(project.id);
  });
});

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

// Set year dynamically (at bottom, by copyright notice)
document.getElementById("year").textContent = new Date().getFullYear();
