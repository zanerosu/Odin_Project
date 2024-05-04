import {format} from 'date-fns';
import { projectList } from "./projects";
let index = 0;

//Returns the project object based on the projects name.
function getProject(projectName){
    return projectList.find((project) => project.name === projectName);
}

//Creates a Todo and assigns it to the Inbox project or user selected project.
function createTodo(projectName, title, desc, dueDate, priority){
    //If no project name is given, it sets a default value of Inbox.
    const project = getProject(projectName);
    
    if (!project){
        console.error(`Project '${projectName}' not found.`);
        return;
    };

    project.todos.push({
        projectName: projectName,
        id: index,
        title: title,
        description: desc,
        createdDate: new Date(),
        dueDate: dueDate,
        priority: priority,
        isComplete: false,
    });
    index += 1;
    updateLocalStorage();
};

function removeTodo(projectName, todoID){
    projectList.forEach((project) => {
        if (project.name === projectName){
            const todoIndex = project.todos.findIndex(todo => todo.id === todoID);
            if (todoIndex !== -1){
                project.todos.splice(todoIndex, 1);
                updateLocalStorage();
            } else {
                console.log("Todo not found!");
            }
        }
    })
}

//Gets all todos from all projects. 
function getAllTodos(){
    const allTodos = [];
    projectList.forEach((project) => {
        allTodos.push(...project.todos);
    })

    return allTodos;
}


function updateLocalStorage(){
    localStorage.setItem('projectList', JSON.stringify(projectList));
}

export {createTodo, projectList, getAllTodos, getProject, removeTodo};