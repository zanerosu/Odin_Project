const todoList = [];

function createTodo(title, desc, dueDate, priority){
    todoList.push({
        title: title,
        description: desc,
        createdDate: new Date(),
        dueDate: dueDate,
        priority: priority
    })
};

function getTodos(){
    return todoList;
}

export {createTodo, getTodos};