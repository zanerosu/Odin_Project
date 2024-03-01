const container = document.querySelector('#container');

const paragraph = document.createElement('p');
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = 'red';
container.appendChild(paragraph);

const header3 = document.createElement('h3');
header3.textContent = "I'm a blue h3!";
header3.style.color = 'blue';
container.appendChild(header3);

const subdiv = document.createElement('div');
subdiv.setAttribute('style', 'background: pink; border:1px solid black;');

const divh1 = document.createElement('div');
divh1.textContent = "I'm in a div";
subdiv.appendChild(divh1);

const divP = document.createElement('p');
divP.textContent="ME TOO!"
subdiv.appendChild(divP);

container.appendChild(subdiv);

