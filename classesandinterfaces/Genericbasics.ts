//Generics
// difference between generics type and unions types
// in generics type we can lock the type what ever type u are passing for function call or at instance of class that type will be locked for all methods and properties
// in union types it is flexible we can switch between types in all functions
// we can say generics is alternative of type any;

const arrademo : Array<string> = [];

//with generics we are give some extra information when we use arrademo like try to keep . after arrademo it will give all string functions list


function merge(a : object, b: object) {
    return Object.assign(a, b);
}

const result5 = merge({name: 'hello'}, {age : 30});

console.log(result5);

// till here everything is fine 

//but when u try to print result5.name it will throw error property name does not exist on type object

// result5.name for this we can do one work around that is type casting

const result6 = merge({name: 'hello'}, {age : 30}) as {name : string, age : number};

//now result6.name will not give eny error but in future we want to extend the object with extra property we have to add in type casting also 
// to resolve this issues generics come into picture

function merge1<W, U>(objA : W, objB :U) {
        return Object.assign(objA, objB); 
}

 const result7 = merge1({name : 'hello'}, {age : 30});
 console.log(result7);

// if u hover on result7 it will show of type {name : string} & {age : number}
// with the help of generics we can infer types at the time of function call and we can be more flexible 
// worst case coding we can keep in place of W and U as any it will also work but intellicence wont work there.

//constraints make generics more effetient

 //const result7 = merge1({name : 'hello'}, 30);

// for above merge1 function in second parameter if u pass string instead of object then it wont give any compile time error but it is not expected behavior right
// we can handle this case by constraints

function merge2<T extends object,U extends object >(objA: T, objB :U) {  // with constraints
    return Object.assign(objA, objB); 
}

const result8 = merge2({name: 'hello'}, {age : 30}); // with constraints 

