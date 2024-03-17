document.addEventListener("DOMContentLoaded", function() {
    const projectId = localStorage.getItem('selectedProjectId');
    if (!projectId) {
        console.error('No project ID found in local storage.');
        return;
    }

    fetch('../assets/data/webProjects.json') // Adjust the path as necessary
        .then(response => response.json())
        .then(projects => {
            const project = projects.find(p => p.id.toString() === projectId);
            if (project) {
                document.title = project.appName;
                
                const detailsContainer = document.getElementById('project-details');
                if (!detailsContainer) {
                    console.error('Project details container not found.');
                    return;
                }
                
                detailsContainer.innerHTML = ''; // Clearing detailsContainer before adding new content

                const titleElement = document.createElement('h2');
                titleElement.textContent = project.appName;
                detailsContainer.appendChild(titleElement);

                const descriptionElement = document.createElement('p');
                descriptionElement.textContent = project.description;
                detailsContainer.appendChild(descriptionElement);

                const techStackElement = document.createElement('p');
                techStackElement.textContent = `Technologies used: ${project.techStack}`;
                detailsContainer.appendChild(techStackElement);
                
                // Create a new container for images with the 'project-details-grid' class
                const gridContainer = document.createElement('div');
                gridContainer.className = 'project-details-grid'; // Assigning the new class
                
                // Append the grid container to the detailsContainer
                detailsContainer.appendChild(gridContainer);

                // Creating and appending image elements to the gridContainer
                project.images.forEach(imageSrc => {
                    const imgElement = document.createElement('img');
                    imgElement.src = imageSrc;
                    imgElement.alt = project.appName;
                    // Apply initial width, which will be overridden by CSS @media queries
                    imgElement.style.width = '100%'; 
                    gridContainer.appendChild(imgElement); // Now appending images to the gridContainer
                });
            } else {
                console.error('Project not found.');
            }
        })
        .catch(error => console.error('Error loading project details:', error));
});
