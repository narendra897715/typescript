const username = 'max';
// if we have variable declared with const we cant reassign the value

//difference between let and var 
//let and var acts same in function scope and global scope 

var results;

function add(a: number, b: number) {
    results = a + b;
    return results;
}

console.log(results);

//here results has global scope 


function add(a: number, b: number) {
    var results123;
    results123 = a + b;
    return results123;
}

//console.log(results123);

//here results123 has function scope so it cant accessed out of function

let resultsforlet;

function add(a: number, b: number) {
    resultsforlet = a + b;
    return resultsforlet;
}

console.log(resultsforlet);

//here results has global scope 


function add(a: number, b: number) {
    let resultsforlet123;
    resultsforlet123 = a + b;
    return resultsforlet123;
}

//console.log(resultsforlet123);  we give error if u uncomment this line 

// let also behave same in global scope and function scope as var but difference is in block scope 

if(true) {
    let blockscope = "hello";
}

//console.log(blockscope);  
// here u cant access blockscope variable since u defined it with let 


if(true) {
    var varblockscope = "chello";
}

console.log(varblockscope);

// here u can access varblocked scope 


