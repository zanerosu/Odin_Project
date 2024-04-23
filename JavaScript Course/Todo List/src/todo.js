import { projectList } from "./projects";

function getProject(projectName){
    return projectList.find((project) => project.name === projectName);
}

function createTodo(projectName, title, desc, dueDate, priority){
    const project = getProject(projectName);
    
    if (!project){
        console.error(`Project '${projectName}' not found.`);
        return;
    };

    project.todos.push({
        projectName: projectName,
        title: title,
        description: desc,
        createdDate: new Date(),
        dueDate: dueDate,
        priority: priority,
        isComplete: false,
    });
};

function getAllTodos(){
    const allTodos = [];
    projectList.forEach((project) => {
        allTodos.push(...project.todos);
    })

    return allTodos;
}


export {createTodo, projectList, getAllTodos};