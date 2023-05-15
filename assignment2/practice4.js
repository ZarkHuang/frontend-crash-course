// 1.create a simple html like example
    
// 2.Append a p tag with “My first DOM created.” into container.
const container = document.querySelector(".container");
const newP = document.createElement("p");
const newContent = document.createTextNode("My first DOM created.");

container.appendChild(newP);
// console.log(newP);
newP.appendChild(newContent);


// 3.Append a ul tag.
const newUl = document.createElement("ul");
container.appendChild(newUl);

for(i=0;i<=2;i++){
        let li=document.createElement('li');
        li.innerHTML="我是標籤";
        newUl.appendChild(li);
    }


// 4.Append 3 li tags into the ul tag with 3 items: red, blue, yellow using for loop. 


// Append 3 li tags into the ul tag with 3 items: red, blue, yellow using for loop.
const colors = new Array("red","orange","yellow","green","blue","indigo","purple");

colors.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    li.style.color = colors[i];
    newUl.appendChild(li);
})