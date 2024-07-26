interface Person {
    name : string;
    age : number;
    greet() : void
}

let user1 : Person;

user1 = {
    name : 'max',
    age : 20,
    greet : () => {
        console.log("hello")
    }
}

//difference between type and interface
// we can use type for all data types like number string object but interface can only be used to define object

interface Greeting {
    name : string;
    greet(data : string) : void
}

class User2 implements Greeting {
    constructor(public name : string) {

    }

    greet(data: string): void {
        console.log(data);
    }
}

const userObject = new User2("max");

userObject.greet("hello");

//note we can implement multiple interface but we have inherit from only one class

//Readonly property in interface

interface Greeting2 {
    readonly name1 : string;
}

class user3 implements Greeting2 {
    constructor(public name1 : string) {

    }
}

const user3obj = new user3("max");
// user3obj.name1 = "marry"; // we get error 

// inheritance in interface

interface A {
    name : string;
}

interface B extends A {
    age : string;
}

//interface as function types

interface Addfn {
    (a: number, b:number) : number
}

let add1234 : Addfn;

add1234 = (a: number, b: number) => {
   return a + b;
}

//optional parameters and properties in interfaces and classes

interface Person4 {
    name? : string;
}

class personclass implements Person4 {
    name?: string;
}

// if name is optional in interface it has to be optional in class also.
