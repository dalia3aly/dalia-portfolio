// dynamic and reusable function, for both architecture & web development JSON files;
function loadProjectDetails(jsonPath) {
  const projectId = localStorage.getItem("selectedProjectId");
  const jsonFilePath = localStorage.getItem("selectedJsonFilePath");

  if (!projectId || !jsonFilePath) {
    console.error("No project ID or JSON file path found in local storage.");
    return;
  }

  fetch(jsonPath)
    .then((response) => response.json())
    .then((projects) => {
      const project = projects.find((p) => p.id.toString() === projectId);
      if (project) {
        document.title = project.appName;

        const detailsContainer = document.getElementById("project-details");
        if (!detailsContainer) {
          console.error("Project details container not found.");
          return;
        }

        detailsContainer.innerHTML = "";

        const titleElement = document.createElement("h2");
        titleElement.textContent = project.appName;
        detailsContainer.appendChild(titleElement);

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = project.description;
        detailsContainer.appendChild(descriptionElement);

        const techStackElement = document.createElement("p");
        techStackElement.textContent = `Technologies used: ${project.techStack}`;
        detailsContainer.appendChild(techStackElement);

        // a new container for hyperlinks with the 'hyperlinks-grid' class to maintain the grid layout
        const hyperlinks = document.createElement("div");
        hyperlinks.className = "hyperlinks-grid";

        if (project.deployedLink) {
          const deployedLinkElement = document.createElement("a");
          deployedLinkElement.href = project.deployedLink;
          deployedLinkElement.target = "_blank";
          deployedLinkElement.rel = "noopener noreferrer";
          deployedLinkElement.textContent = `Live Demo  `;

          // Added deployedLink icon
          const globeIcon = document.createElement("img");
          globeIcon.src = "assets/img/icons/LVD.png";
          globeIcon.alt = "Live Demo";

          deployedLinkElement.appendChild(globeIcon);
          hyperlinks.appendChild(deployedLinkElement);
        }

        detailsContainer.appendChild(hyperlinks);

        if (project.githubLink) {
          const githubLinkElement = document.createElement("a");
          githubLinkElement.href = project.githubLink;
          githubLinkElement.target = "_blank";
          githubLinkElement.rel = "noopener noreferrer";
          githubLinkElement.textContent = `Github Repo`;

          // Added GitHub icon
          const githubIcon = document.createElement("img");
          githubIcon.src = "assets/img/icons/Github.png";
          githubIcon.alt = "GitHub Repo";

          githubLinkElement.appendChild(githubIcon);
          hyperlinks.appendChild(githubLinkElement);
        }

        detailsContainer.appendChild(hyperlinks);

        const myRoleElement = document.createElement("p");
        myRoleElement.textContent = `${project.myRole}`;
        detailsContainer.appendChild(myRoleElement);

        // a new container for images with the 'project-details-grid' class to maintain the grid layout
        const gridContainer = document.createElement("div");
        gridContainer.className = "project-details-grid";

        detailsContainer.appendChild(gridContainer);

        project.images.forEach((imageSrc) => {
          const imgElement = document.createElement("img");
          imgElement.src = imageSrc;
          imgElement.alt = project.appName;
          gridContainer.appendChild(imgElement); // append images to gridContainer instead of detailsContainer
        });
      } else {
        console.error("Project not found.");
      }
    })
    .catch((error) => console.error("Error loading project details:", error));
}

loadProjectDetails("../assets/data/webProjects.json");
loadProjectDetails("../assets/data/archProjects.json");
