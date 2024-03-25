// document.addEventListener("DOMContentLoaded", function() {
//     const projectId = localStorage.getItem('selectedProjectId');
//     if (!projectId) {
//         console.error('No project ID found in local storage.');
//         return;
//     }

//     fetch('../assets/data/webProjects.json') // Adjust the path as necessary
//         .then(response => response.json())
//         .then(projects => {
//             const project = projects.find(p => p.id.toString() === projectId);
//             if (project) {
//                 document.title = project.appName;
                
//                 const detailsContainer = document.getElementById('project-details');
//                 if (!detailsContainer) {
//                     console.error('Project details container not found.');
//                     return;
//                 }
                
//                 detailsContainer.innerHTML = ''; // Clearing detailsContainer before adding new content

//                 const titleElement = document.createElement('h2');
//                 titleElement.textContent = project.appName;
//                 detailsContainer.appendChild(titleElement);

//                 const descriptionElement = document.createElement('p');
//                 descriptionElement.textContent = project.description;
//                 detailsContainer.appendChild(descriptionElement);

//                 const techStackElement = document.createElement('p');
//                 techStackElement.textContent = `Technologies used: ${project.techStack}`;
//                 detailsContainer.appendChild(techStackElement);

//                 const myRoleElement = document.createElement('p');
//                 myRoleElement.textContent = `${project.myRole}`;
//                 detailsContainer.appendChild(myRoleElement);
                
//                 // Create a new container for images with the 'project-details-grid' class
//                 const gridContainer = document.createElement('div');
//                 gridContainer.className = 'project-details-grid'; // Assigning the new class
                
//                 // Append the grid container to the detailsContainer
//                 detailsContainer.appendChild(gridContainer);

//                 // Creating and appending image elements to the gridContainer
//                 project.images.forEach(imageSrc => {
//                     const imgElement = document.createElement('img');
//                     imgElement.src = imageSrc;
//                     imgElement.alt = project.appName;
//                     // Apply initial width, which will be overridden by CSS @media queries
//                     imgElement.style.width = '100%'; 
//                     gridContainer.appendChild(imgElement); // Now appending images to the gridContainer
//                 });
//             } else {
//                 console.error('Project not found.');
//             }
//         })
//         .catch(error => console.error('Error loading project details:', error));
// });



// dynamically use this reusable function instead, for both architecture & web development JSON files;
function loadProjectDetails(jsonPath) {
    const projectId = localStorage.getItem('selectedProjectId');
    const jsonFilePath = localStorage.getItem('selectedJsonFilePath'); // Retrieve the JSON file path

    if (!projectId || !jsonFilePath) {
        console.error('No project ID or JSON file path found in local storage.');
        return;
    }

    fetch(jsonPath) // Use the jsonPath parameter
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

                detailsContainer.innerHTML = '';

                const titleElement = document.createElement('h2');
                titleElement.textContent = project.appName;
                detailsContainer.appendChild(titleElement);

                const descriptionElement = document.createElement('p');
                descriptionElement.textContent = project.description;
                detailsContainer.appendChild(descriptionElement);

                const techStackElement = document.createElement('p');
                techStackElement.textContent = `Technologies used: ${project.techStack}`;
                detailsContainer.appendChild(techStackElement);

                const deployedLinkElement = document.createElement('a');
                deployedLinkElement.href = project.deployedLink;
                deployedLinkElement.textContent = `${project.deployedLink}`;
                detailsContainer.appendChild(deployedLinkElement);

                const myRoleElement = document.createElement('p');
                myRoleElement.textContent = `${project.myRole}`;
                detailsContainer.appendChild(myRoleElement);

                // a new container for images with the 'project-details-grid' class to maintain the grid layout
                 const gridContainer = document.createElement('div');
                 gridContainer.className = 'project-details-grid';

                 detailsContainer.appendChild(gridContainer);

                 project.images.forEach(imageSrc => {
                    const imgElement = document.createElement('img');
                    imgElement.src = imageSrc;
                    imgElement.alt = project.appName;
                    gridContainer.appendChild(imgElement);  // append images to gridContainer instead of detailsContainer
                });
            } else {
                console.error('Project not found.');
            }
        })
        .catch(error => console.error('Error loading project details:', error));
}

loadProjectDetails('../assets/data/webProjects.json');
loadProjectDetails('../assets/data/archProjects.json');