// index properties

interface Employee {
    [props : string] : string
}

const employee : Employee = {
    name : "hello"
}

// when we dont know what objects the variable type will have and we want to make interface flexible to accept any number of properties we user index properties

// function overload

type combinable1 = string | number ;

function addition(a: combinable1 , b : combinable1) {
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result1 = addition("max", "hello");
//result1.split() //  will get error
// here when u hover on result1 it will show of type string | number so at this point typescript dont know wheather it is a string or number and whenever
// we want to use string functions on result1 like split() it will throw error there are 2 options either we can do type casting or use function overload

// by type casting
//const result1 = addition("max", "hello") as string;

// by function overload
function addition1(a: number , b : number) : number
function addition1(a: string , b : string) : string
function addition1(a: combinable1 , b : combinable1) {
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result12 = addition1("max", "hello");
result12.split("");

// now if u hover on result12 it will show as string type  


//nullish coleasing

const updatevalue = undefined;

const storedvalue = updatevalue ?? 'Default';

console.log(storedvalue);

//here if updatevalue is undefined or null 'Default' will be assigned to storedvalue

// when we use || operator when uv is " "(empty Or undefined or null) then 'Default will assigned.

const uv = ""

const storedvalue1 = uv || 'Default';

console.log(storedvalue1);
