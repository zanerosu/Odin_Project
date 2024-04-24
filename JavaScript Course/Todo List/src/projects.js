const projectList = [
    {
        name: "inbox",
        todos: []
    },
    {
        name: "Project 1",
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