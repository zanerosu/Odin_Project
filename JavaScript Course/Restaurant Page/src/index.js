import './style.css';
import { loadHome } from './homepage';

const nav_Home = document.querySelector("#nav-Home");
const nav_Menu = document.querySelector("#nav-Menu");
const nav_About = document.querySelector("#nav-About");
const nav_Contact = document.querySelector("#nav-Contact");

function clearContent(){
    const mainContent = document.querySelector("#content");
    mainContent.innerHTML = '';
}

loadHome();

nav_Home.addEventListener('click', (event)=>{
    clearContent();
    loadHome();
})

nav_Menu.addEventListener('click', (event)=>{
    clearContent();
    
})

nav_About.addEventListener('click', (event)=>{
    clearContent();
    
})

nav_Contact.addEventListener('click', (event)=>{
    clearContent();
    
})