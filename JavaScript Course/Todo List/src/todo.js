import { projectList } from "./projects";

//Returns the project object based on the projects name.
function getProject(projectName){
    return projectList.find((project) => project.name === projectName);
}

//Creates a Todo and assigns it to the general project or user selected project.
function createTodo(projectName, title, desc, dueDate, priority){
    //If no project name is given, it sets a default value of general.
    const project = getProject(projectName ? projectName : "inbox");
    
    if (!project){
        console.error(`Project '${projectName}' not found.`);
        return;
    };

    project.todos.push({
        projectName: projectName ? projectName : "inbox",
        title: title,
        description: desc,
        createdDate: new Date(),
        dueDate: dueDate,
        priority: priority,
        isComplete: false,
    });
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