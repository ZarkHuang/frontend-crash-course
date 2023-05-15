// Continuing from the previous practice.
// Create a text input and button called “add color”, when user click the button add the color in the text input into the list.


const container = document.querySelector(".container");
const b = document.createElement('button');
const input = document.createElement('input');
const span = document.createElement('span');
const newContent = document.createTextNode("My first DOM created.");



container.appendChild(b);
container.appendChild(input);

b.setAttribute('content', 'test content');
b.setAttribute('class', 'btn');  
b.textContent = 'test value';

b.addEventListener('click', function(){
    input.value = input.value + 'color';
  });
  