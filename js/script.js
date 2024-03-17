// Event listener for the DOMContentLoaded event - this is fired when the HTML has been fully loaded and parsed
// document.addEventListener("DOMContentLoaded", function() {
//     const projectsGrid = document.querySelector('.projects-grid');
//     if (!projectsGrid) {
//         console.error('Error: .projects-grid element not found');
//         return;
//     }

//     fetch('../assets/data/webProjects.json') 
//       .then(response => {
//         if (!response.ok) {
//           // If the response is not OK (i.e. 404, 500, etc.), log the error to the console
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(projects => {
//         projects.forEach(project => {
//           const projectItem = document.createElement('div');
//           projectItem.className = 'project-item';
//           projectItem.innerHTML = `
//             <a href="javascript:void(0);" onclick="openProjectDetails(${project.id})">
//               <img src="${project.logo}" alt="${project.appName}" />
//               <div class="project-info">
//                 <h2>${project.appName}</h2>
//               </div>
//             </a>
//           `;
//           // Add the project item to the projects grid
//           projectsGrid.appendChild(projectItem);
//         });
//       })
//       .catch(error => console.error('Error loading projects:', error));
// });

function loadProjectsGrid(jsonPath, targetSectionId) {
  // Use the targetSectionId to select the correct projects-grid within the specified section
  const projectsGrid = document.querySelector(`${targetSectionId} .projects-grid`);
  if (!projectsGrid) {
      console.error(`Error: .projects-grid element not found in ${targetSectionId}`);
      return;
  }

  projectsGrid.innerHTML = ''; // Clear the projects grid before loading new projects

  fetch(jsonPath)
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
      })
      .then(projects => {
          projects.forEach(project => {
              const projectItem = document.createElement('div');
              projectItem.className = 'project-item';
              projectItem.innerHTML = `
                  <a href="javascript:void(0);" onclick="openProjectDetails('${project.id}')">
                      <img src="${project.logo}" alt="${project.appName}" />
                      <div class="project-info">
                          <h2>${project.appName}</h2>
                      </div>
                  </a>
              `;
              projectsGrid.appendChild(projectItem);
          });
      })
      .catch(error => console.error('Error loading projects:', error));
}


loadProjectsGrid('./assets/data/webProjects.json', '#webProjects');
loadProjectsGrid('./assets/data/archProjects.json', '#archProjects');


function openProjectDetails(projectId, jsonFilePath) {
  const projectDetails = {
    projectId: projectId.toString(),
    jsonFilePath: jsonFilePath
  };

  localStorage.setItem('selectedProjectDetails', JSON.stringify(projectDetails));

  window.open('project-detail.html', '_blank');
}

document.addEventListener('DOMContentLoaded', function() {
  const projectId = localStorage.getItem('selectedProjectId');
  fetch('./assets/data/webProjects.json') 
    .then(response => response.json())
    .then(projects => {
      const project = projects.find(p => p.id == projectId);
    })
    .catch(error => console.error('Error loading project details:', error));
});

function openProjectDetails(projectId, jsonFilePath) {
  localStorage.setItem('selectedProjectId', projectId.toString());
  localStorage.setItem('selectedJsonFilePath', jsonFilePath);

  window.open('project-detail.html', '_blank');
}
