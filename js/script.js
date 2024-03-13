// Event listener for the DOMContentLoaded event - this is fired when the HTML has been fully loaded and parsed
document.addEventListener("DOMContentLoaded", function() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) {
        console.error('Error: .projects-grid element not found');
        return;
    }

    fetch('../assets/data/webProjects.json') 
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
            <a href="javascript:void(0);" onclick="openProjectDetails(${project.id})">
              <img src="${project.images[0]}" alt="${project.description}" />
              <div class="project-info">
                <h3>${project.appName}</h3>
                <p>${project.description}</p>
              </div>
            </a>
          `;
          // Add the project item to the projects grid
          projectsGrid.appendChild(projectItem);
        });
      })
      .catch(error => console.error('Error loading projects:', error));
});


document.addEventListener('DOMContentLoaded', function() {
  const projectId = localStorage.getItem('selectedProjectId');
  fetch('./assets/data/webProjects.json') 
    .then(response => response.json())
    .then(projects => {
      const project = projects.find(p => p.id == projectId);
      if (project) {       
        document.title = project.appName; 
      }
    })
    .catch(error => console.error('Error loading project details:', error));
});

function openProjectDetails(projectId) {
  localStorage.setItem('selectedProjectId', projectId.toString());

  window.open('project-detail.html', '_blank');
}
