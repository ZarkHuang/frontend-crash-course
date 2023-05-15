// 1.Create a simple html with some tags.

// 2.Using getElementById to get a element and print it.
    let ul = document.getElementById('ulTag')
    console.log(ul)

// 3.Using getElementsByClassName to get elements and print all.

    let all = document.getElementsByClassName('all');
    console.log( all );

// 4.Using querySelector to get a element by id and print it.
    let span = document.querySelector('#span')
    console.log(span);
    span.innerHTML = 'change';


// 5.Using querySelector to get a element by class and print it.
    let section = document.querySelector('p')
    console.log(section);

// 6.Using querySelectorAll to get elements by class and print all.
    const allVetor = document.querySelectorAll("ul");
    console.log(allVetor);
    console.log(allVetor[1]);
