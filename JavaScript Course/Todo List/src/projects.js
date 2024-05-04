let projectList = [];


const storedProjects = JSON.parse(localStorage.getItem('projectList'));
projectList = storedProjects ? storedProjects : getDefaultProjects();


function getDefaultProjects(){
    return [
        {
            name: "Inbox",
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
}

function createProject(projectName){
    projectList.push({
        name: projectName, 
        todos: []
    })
};

export{projectList, createProject};