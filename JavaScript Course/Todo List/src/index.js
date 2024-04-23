import './style.css';
import {createTodo, projectList, getAllTodos} from './todo';
import { createProject } from './projects';
import { loadSidebarProjects } from './sidebar';

createTodo("", "Task 1", "Desc 1", "1/13/24", "High");
createTodo("", "Task 2", "Desc 1", "1/13/24", "High");
createTodo("Project 2", "Task 3", "Desc 1", "1/13/24", "High");
createTodo("Project 2", "Task 3", "Desc 1", "1/13/24", "High");
createTodo("Project 2", "Task 3", "Desc 1", "1/13/24", "High");

loadSidebarProjects();

console.log(projectList);


