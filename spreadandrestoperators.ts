const hobbies = ['cricket', 'running'];

const activehobbies = [...hobbies, 'swimming'];

const inactivehobbies = ['badmington'];

inactivehobbies.push(...hobbies);


const person1 = {
    name : "max",
    age : 30
}

const copyperson = {...person1};


//REST operator

const add123 = (...numbers : number[]) => {
   for(let numb in numbers) {
    console.log(numb);
   }
}

add123(3,4,5);

// rest operator is used when u want to make number of parameters flexible like  when u dont know how many u will pass