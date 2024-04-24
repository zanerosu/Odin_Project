import { projectList } from "./projects";
import { loadTodos } from "./loadTasks";

const projectSection = document.querySelector("#project-list")

export function loadSidebarProjects(){
    projectList.forEach((project) => {
        if(project.name !== "inbox"){
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
            projectDiv.addEventListener('click', ()=>{
                loadTodos(project.name);
            })

            projectSection.appendChild(projectDiv);
        }
    })
}