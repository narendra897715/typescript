//type alias
type Combinable = number | string;

function combine(input1 : Combinable, input2 : Combinable) {
    if(typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    } else {
        return input1.toString() + input2.toString();
    }
    
}

const combineNumber = combine(30,20);
console.log(combineNumber);

const combineStrings = combine("max", "hary");
console.log(combineStrings);

//Note
//if we dont use if and else inside combine method we will get error because + operator will work on eaither on strings or on numbers but here we are giving variable of type
// number | string on which it cant do operations 

//type alias is not only useful for unions it can also be used for object types

type User = {name : string, age : number};

function greet(user: User) {
    console.log('Hi, I am ' + user.name);
  }
   
  function isOlder(user: User, checkAge: number) {
    return checkAge > user.age;
  }

  // this function is returns nothing so return type of function is void 
  function printResults(num : number) {
    console.log('num is ' + num);
  }

  //we can write above function in another way like 
  function printResults1(num : number) {
    console.log("num is" + num);
    return;
  }

  function printResults2(num : number) : undefined {
    console.log("num is " + num);
  }