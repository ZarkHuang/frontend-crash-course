// 1.Create an object called person with properties for name, age, and gender. Assign values to these properties and then display the name and age of the person.

    const person = {
        name: '',
        age: 1,
        sex: ''
    }

    person.name = 'Mark',
    person.age = 20;
    person.sex = 'Man';
    console.log (person.name,person.sex);


// 2.Add a method to the person object created in the previous assignment called greet. The method should display a greeting message “Hello”. Invoke the greet method to see the greeting message.

    person.greet = function(){
        console.log( 'Hello!,Mark');
    }
    
    person.greet(); //Hello!,Mark

// 3.Add a properties called friends to the person which contains several names and print it.

    person.friends = ['Jenny','Stepanie','Maria'];
    console.log( person.friends);