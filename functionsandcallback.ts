function add1(num : number, num2 : number) {
    return num + num2
}

function printdata(num : number) {
    console.log('num is' + num);
}

let combinevalues : (a: number, b: number) => number;

combinevalues = add1;
combinevalues(10,20);

//here we are defining combinevalues as function type that means only function which have 2 parameters of number type and returns number 
// that function can only be assigned to combinevalues variable.
//for example if we try to assign printdata function it will throw error

function addwithcallback(num1: number, num2 : number, cb : (a : number) => void) {
    const result = num1 + num2;
    cb(result);
}

addwithcallback(10, 20, (result) => {
    console.log(result);
    //even though callback return type is void if we write written here it wont throw any error
    //return;
})