document.addEventListener("DOMContentLoaded", function() {
    const projectId = localStorage.getItem('selectedProjectId');
    if (!projectId) {
        console.error('No project ID found in local storage.');
        return;
    }

    fetch('../assets/data/webProjects.json')     // adjust this path to the JSON file if needed
        .then(response => response.json())
        .then(projects => {
            const project = projects.find(p => p.id.toString() === projectId);
            if (project) {
                // Dynamically setting the page title to the project's appName
                document.title = project.appName;
                
                // Assuming there's a container div in project-details.html with id="project-details"
                const detailsContainer = document.getElementById('project-details');
                if (!detailsContainer) {
                    console.error('Project details container not found.');
                    return;
                }

                // Clearing detailsContainer before adding new content
                detailsContainer.innerHTML = '';

                // Creating and appending the project title
                const titleElement = document.createElement('h2');
                titleElement.textContent = project.appName;
                detailsContainer.appendChild(titleElement);

                // Creating and appending the project description
                const descriptionElement = document.createElement('p');
                descriptionElement.textContent = project.description;
                detailsContainer.appendChild(descriptionElement);

                // Creating and appending the techStack
                const techStackElement = document.createElement('p');
                techStackElement.textContent = `Technologies used: ${project.techStack}`;
                detailsContainer.appendChild(techStackElement);

                // Creating and appending image elements for each fetched image
                project.images.forEach(imageSrc => {
                    const imgElement = document.createElement('img');
                    imgElement.src = imageSrc;
                    imgElement.alt = project.appName;
                    imgElement.style.width = '50%';
                    detailsContainer.appendChild(imgElement);
                });
            } else {
                console.error('Project not found.');
            }
        })
        .catch(error => console.error('Error loading project details:', error));
});
