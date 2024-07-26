
interface Length {
    length : number
}

function countDescribe<T extends Length>(element : T) {
   let descriptionText = "Got no value";
   if(element.length == 1) {
    descriptionText = 'Got 1 value';
   } else if(element.length >=1 ) {
    descriptionText = `Got ${element.length} value`;
   }
   return descriptionText;
}

console.log(countDescribe("hello"));
console.log(countDescribe(["hobbies", "sports"]));

//console.log(countDescribe(10)); will throw error bcz number dont have length property

// here if u dont use constraint (extends Length) it will throw error whereever u access length property because typescript dont know whether 
// u have length property on element or not 

// we can also write above function without generics by using unions= types 

function countDescribe1(element : string | string[]) {
    let descriptionText = "Got no value";
    if(element.length == 1) {
     descriptionText = 'Got 1 value';
    } else if(element.length >=1 ) {
     descriptionText = `Got ${element.length} value`;
    }
    return descriptionText;
 }

 // keyof constraint 

//  function extractAndConvert<T,U>(obj : T, key : U) {
//     return obj[key];
//  }

 // in line 39 it will throw error bcz we are not giving gurantee that obj will have the key so we have to give gurantee that obj will have that key 
 // we can solve this use case by generics

 function extractAndConvert1<T extends object, U extends keyof T>(obj : T, key : U) {
    return obj[key];
 }

 extractAndConvert1({name : 'hello'}, 'name');

 //Generics classess

//  class DataStorage {
//    public data = [];

//    addItem(item) {
//       this.data.push(item);
//    }

//    removeItem(item) {
//       this.data.splice(this.data.indexOf(item), 1);
//    }

//    getItems() {
//       return this.data
//    }
//  }


 // here we are getting error that item implicitly has any type we can fix this by generics

 class DataStorage<T> {
   public data : T[] = [];

   addItem(item :T) {
      this.data.push(item);
   }

   removeItem(item :T) {
      this.data.splice(this.data.indexOf(item), 1);
   }

   getItems() {
      return this.data
   }
 }

 const stringstorage = new DataStorage<string>();
 stringstorage.addItem('max');
 stringstorage.addItem('marry');
 stringstorage.removeItem('max');
 stringstorage.getItems();

 const numberstorage = new DataStorage<number>();
 numberstorage.addItem(10);
 numberstorage.addItem(20);
 numberstorage.removeItem(30);
 numberstorage.getItems();

 // now if we want this class to accept only string, numbers, boolean we can use constraints also 

 class DataStorage1<T extends string | number | boolean> {
   public data : T[] = [];

   addItem(item :T) {
      this.data.push(item);
   }

   removeItem(item :T) {
      this.data.splice(this.data.indexOf(item), 1);
   }

   getItems() {
      return this.data
   }
 }

 
