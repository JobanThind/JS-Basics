console.log('Hello World');                 //display in console
console.error("This is an error");          //error
console.warn("warning");                   //warning

//  define variables  var(global scope),let(block level), const
// data types  String,numbers,boolean,null,undefined
//semicolon not necessary

const name = "Joban";
const age = 22;
const rating = 4.5;
const flag = true;
const x = null;
const y = undefined;
let z;

const types = typeof name + " " + typeof age + " " + typeof rating + " " + typeof flag + " " + typeof x + " " + typeof y + " " + z;
console.log(types);

//Template String
//use ` to concatenate like this
const info = `My name is ${name} and I am ${age} with flag ${flag}`;
console.log(info);

//String functions

const string = "hello world";
console.log(string.length + " " + string.toUpperCase().substr(0, 5));
console.log(string.split(" "));                    //returns an array

//Arrays can have diff data type in single arrayand are 0 based

const arr = ['apple', 1, 2, 3, 'oranges']
arr[6] = 5;                       //adds at specified index and if greater than size rest are marked empty
arr.push(6);                    //adds at last
arr.unshift(0);                 //adds in the beginning
arr.pop();                      //remove last element
console.log(arr.length + " "+ arr );
console.log(Array.isArray(arr)); // returns true if arr is an array
console.log(arr.indexOf("oranges"));

//Object Literals -> key value pairs
const person = {
    firstName: "Jobanpreet",
    lastName: "Thind",
    age: 22,
    hobbies: ["football", "music"],
    address: {
        hNo: "94",
        city: "Patiala",
        state: "Punjab"
    }
}
console.log(person.firstName + " " + person.hobbies[0] + " " + person.address.state);
const { firstName, hobbies, address: { state } } = person;
console.log(firstName + " " + hobbies[0] + " " + state);

person.email = "xyz@abc.com";
console.log(person);


//Arrays of objects

const todos = [
    {
        id: 1,
        task: "do task1",
        iscomplete: true
    },
    {
        id: 2,
        task: "do task2",
        iscomplete: true
    },
    {
        id: 3,
        task: "do task3",
        iscomplete: false
    }
];

console.log(todos[1].task);

//converting to JSon

const todosJson = JSON.stringify(todos);
console.log(todosJson);

//loops

for(let i=0;i<10;i++){}

let i=0;
while(i<10){
    i++;
}

for(let todo of todos){
console.log( todo );
}

let num= 10;
console.log( num==10 );
console.log( num===10 );        //checks data type too
num="10";
console.log( num==10 );
console.log( num===10 );


//functions

function addnum(num1 = 1,num2 = 2){             //arguments with default values
console.log(num1 + num2);
}

addnum(3,4);
addnum();

//constructor function

function Person(firstName,lastName,dob){
    this.firstName=firstName;
    this.lastName=lastName;
    this.dob=dob;
}

const person1= new Person("Joban","Thind","05-14-1999");
console.log(person1);
console.log(new Date(person1.dob));

//Class
class PersonClass{
    constructor(firstName,lastName,dob){
        this.firstName=firstName;
        this.lastName=lastName;
        this.dob=dob;
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}
const person2= new PersonClass("Joban","Thind","05-14-1999");
console.log(person2);
console.log(person2.getFullName());

