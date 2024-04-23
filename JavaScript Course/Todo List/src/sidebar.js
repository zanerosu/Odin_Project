import { projectList } from "./projects";

const projectSection = document.querySelector("#project-list")

export function loadSidebarProjects(){
    projectList.forEach((project) => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('sidebar-link');
        projectDiv.id = project.name;

        //Adds google tag icon
        const projectIcon = document.createElement('span');
        projectIcon.classList.add("material-symbols-outlined");
        projectIcon.textContent = "tag";

        projectDiv.appendChild(projectIcon);

        const projectName = document.createElement('h2');
        projectName.textContent = project.name;

        projectDiv.appendChild(projectName);
        projectSection.appendChild(projectDiv);
    })
}