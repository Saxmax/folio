// Set year dynamically (at bottom, by copyright notice)
document.getElementById("year").textContent = new Date().getFullYear();

let projects = [];

const sections = ["about", "skills", "projects", "contact"];
const modals = [
  "anticheat",
  "dooh",
  "framework",
  "godot",
  "multiplayer",
  "unity",
];

function fetchContent() {
  for (const section of sections) {
    fetch(`sections/${section}.html`)
      .then((response) => response.text())
      .then((html) => {
        document.getElementById(`section-${section}`).innerHTML = html;
      });
  }

  for (const modal of modals) {
    fetch(`projects/${modal}.html`)
      .then((response) => response.text())
      .then((html) => {
        document.body.innerHTML += html;

        if (modal == modals[modals.length - 1]) {
          setTimeout(() => loadProjects(), 50);
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
      document.body.classList.add("overflow-hidden"); // lock background
    }
  });
}

function hideProject(cardId) {
  projects.forEach((project) => {
    if (project.id == cardId) {
      project.classList.add("hidden");
      document.body.classList.remove("overflow-hidden"); // unlock background
    }
  });
}

function hideAllProjects() {
  projects.forEach((project) => project.classList.add("hidden"));
}

function toggleImage(img) {
  img.classList.add("opacity-0");

  setTimeout(() => {
    const isLarge = img.dataset.state === "full";
    if (!isLarge) {
      img.dataset.state = "full";
      img.src = img.dataset.full;
      img.classList.remove("max-w-lg", "cursor-zoom-in");
      img.classList.add("max-w-full", "cursor-zoom-out");
    } else {
      img.dataset.state = "small";
      img.src = img.dataset.small;
      img.classList.remove("max-w-full", "cursor-zoom-out");
      img.classList.add("max-w-lg", "cursor-zoom-in");
    }

    img.classList.remove("opacity-0");
  }, 150);
}

fetchContent();
