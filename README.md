# Project: Portfolio Website

## Deployed Site

https://dalia3aly.netlify.app/#home

## Overview

This portfolio website showcases a collection of web development and architecture projects that I worked on throughout my career journey. It's designed as a single-page application (SPA) that dynamically loads project details based on user interaction, providing a seamless experience as users explore different projects.

## Features

- **Dynamic Project Loading**: Project details are fetched and displayed dynamically, allowing for a rich, interactive user experience without the need for page reloads.
- **Responsive Design**: The website is fully responsive, ensuring a consistent experience across a wide range of devices and screen sizes.
- **Technology Showcase**: Each project's technologies and tools are highlighted, providing insight into the skills and capabilities demonstrated through the portfolio.

## Technologies Used

- HTML
- CSS/SCSS
- JavaScript
- localStorage for state management between page loads

## Project Structure

- `index.html`: The main entry point of the portfolio website.
- `project-detail.html`: A template used to display details for individual projects when selected.
- `css/`: Directory containing CSS stylesheets.
  - `style.scss`: Main stylesheet for the website.
- `js/`: Directory containing JavaScript scripts.
  - `script.js`: Contains the main JavaScript logic for handling dynamic content loading on the index page.
  - `projectdetails.js`: Handles fetching and displaying project details in `project-detail.html`.
- `assets/data/`: Directory containing JSON files with project details.
  - `webProjects.json`: Project details for web development projects.
  - `archProjects.json`: Project details for architecture projects.

## Setup and Usage

1. Clone the repository to your local machine.
2. Open `index.html` in a modern web browser to view the portfolio website.
3. Explore the portfolio by clicking on project cards to load and view project details dynamically.

