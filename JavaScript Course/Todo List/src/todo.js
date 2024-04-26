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
};

//Gets all todos from all projects. 
function getAllTodos(){
    const allTodos = [];
    projectList.forEach((project) => {
        allTodos.push(...project.todos);
    })

    return allTodos;
}


export {createTodo, projectList, getAllTodos, getProject};