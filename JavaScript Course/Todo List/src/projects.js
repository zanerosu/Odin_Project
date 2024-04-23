const projectList = [
    {
        name: "General",
        todos: []
    },
    {
        name: "Project 2",
        todos: []
    }
];

function createProject(projectName){
    projectList.push({
        name: projectName, 
        todos: []
    })
};

export{projectList, createProject};