import './style.css';
import { loadHome } from './homepage';
import { loadMenu} from './menu';
import { loadContact } from './contact';

const nav_Home = document.querySelector("#nav-Home");
const nav_Menu = document.querySelector("#nav-Menu");
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
    loadMenu();
})

nav_Contact.addEventListener('click', (event)=>{
    clearContent();
    loadContact();
})