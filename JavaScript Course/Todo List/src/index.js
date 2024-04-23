import './style.css';
import {createTodo, projectList, getAllTodos} from './todo';
import { createProject } from './projects';

createTodo("Project 1", "Task 1", "Desc 1", "1/13/24", "High");
createTodo("Project 1", "Task 2", "Desc 1", "1/13/24", "High");
createTodo("Project 2", "Task 3", "Desc 1", "1/13/24", "High");
createTodo("Project 2", "Task 3", "Desc 1", "1/13/24", "High");
createTodo("Project 2", "Task 3", "Desc 1", "1/13/24", "High");

console.log(projectList);


