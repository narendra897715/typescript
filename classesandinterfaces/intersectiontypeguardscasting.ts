

type person = {
    name : string;
    age : number;
    privalage : string[]
}

type employee = {
    name : string;
    startDate : Date
}

//intersection types
type universal = person & employee;

let user : universal = {
    name : 'max',
    age : 20,
    privalage : ['hello'],
    startDate : new Date()
}

type combinable = string | number;
type person3 = number | boolean;

let result : combinable & person3;

// when we do intersection on strings or number we get what is common between both here b/w person1 and person3 number type is common.

//type guards

function add(a: combinable, b: combinable) {
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    } else {
        a + b;
    }
}

// with the help of type guard we can use union types flexibly line number 34 is type guard without type guard concatination logic will give error 
// if we want that same function to do multiple task like it should concatinate 2 strings and it should add 2 numbers so we use unions type for parameters 

type unknownEmployee = person | employee;

function printEmployee(empl : unknownEmployee) {
    console.log(empl.name);
    if("privalage" in empl) {
        console.log(empl.privalage);
    }
    if("startDate" in empl) {
        console.log(empl.startDate);
    }
}

// line number 48 and 51 is also one type of typeguard.

printEmployee(user);


//Discrimination unions

interface Bird {
    type : 'bird';
    flyingSpeed : number
}

interface Horse {
    type : 'horse';
    groundSpeed : number
}

type Animal = Bird | Horse;

function printAnimal(animal : Animal) {
    let speed;
    switch(animal.type) {
        case 'bird' :
            speed = animal.flyingSpeed;
            break;
            case 'horse':
                speed = animal.groundSpeed;
                break;
    }
}

// in above function we can use flyindspeed in animal type guards but we used discrimination unions because we may misspell flyingspeed 

printAnimal({type: 'bird', flyingSpeed : 10});

//Type Casting

//const userInput = document.getElementById('user-input')!;

//userInput.value = 'hello';

// now here userInput is of HTMLELEMENT type on which value property is not accessed so we have to type caste it 

const userInput2 = document.getElementById('user-input')! as HTMLInputElement;
userInput2.value = "hello";