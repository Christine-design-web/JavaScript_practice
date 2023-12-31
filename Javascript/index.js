  
function myVar(noun, verb, adverb, pronoun){
    var result = " ";
    result = "The " + noun + verb + adverb + " to the river " + pronoun;
     
    return result;

}

console.log(myVar("teacher", " went", " down", "running"));



var myArray = [["Alexis", 2],"[Adrian", 4];
myArray.shift();
myArray.unshift("Christine",5)

console.log(myArray);



function myWorld(){
    console.log('hello world')

}
myWorld();


//passing functions

function passFunctions (x, y) {
    console.log (x - y)
}

passFunctions(10, 5);


//global scope and functions -visisbility of variables and global can be seen everywhere

var myGlobal = 10;

function func1() {
    oopsGlobal = 5;
}

function func2(){
    var output = " ";
    if (typeof myGlobal != "undefined"){
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += "\n oopsGlobal: "+oopsGlobal;
    }
    console.log(output);
} 
func1();
func2();

//local scope - using the variable inside the function and trying to print it twice while you have called it outside the function.
//local vs global variable
var outwear = "Trouser";
function dress(){
    return outwear;
}
console.log(dress());
var sum = 2;

function addFive() {
    return sum += 5;
}

var result = addFive(); // Call the function and store the result in 'result'
console.log(result);    // Log the result


//processing
var processed = 0;

function processArg(num){
    return (num + 3);
}
 processed = processArg(5);
 console.log (processed);
//stand line - a cue is the abstract data structure new items can be added back of the cue and old items are taken off from the front of the cue
//Boolean - returns true or false
function myVar(){
    return true;
}
myVar();

//if statements
function trueOrFalse(isItTrue) {
    if (isItTrue) {
        return "yes it is";

    }
    return "no, it's false"
}

console.log(trueOrFalse(true));//output: yes it is...
console.log(trueOrFalse()); // output: no it's false

//not equal 
function notEqual(val) {
if (val > 100){
return "it's less than";
}
if (val >= 100){
    return "cool it's not equal"
}
return "try again";
}

console.log(notEqual(90));


//else statement
function elseStatement(val) {
    if (val > 10){
        return "improve";
    } else{

    return "go on";
    }

}
console.log(elseStatement(9));

//else if statement
//logical order in else if statement
function testElseIf(val){
    if (val > 5){
        return "hello world"
    } else if (val < 10){
        return "goodbye cruel world"
    } else {
        return "who are you"
    }
}
console.log(testElseIf(3));

//if else statement exercise with free code company
function prompt(num){
    if (num < 5){
        return "Tiny"
    }
    else if (num < 10){
        return "small"
    }
    else if (num < 15){
        return "medium"
    }
    else if (num < 20){
        return "Large"
    }
    else {
        return "huge"
    }

}
console.log(prompt(4));

//Golf code
var names = ["Hole-in-one", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"];
function golfScore(par, strokes){
    if (strokes == 1){
        return names[0];
    }else if(strokes <= par - 2) {
        return names[1];
    }else if (strokes == par - 1){
        return names [2];
    }else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1){
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    }else if  (strokes >= par + 3){
        return names[6];
    }
}
console.log(golfScore(5, 8));

// switch statements
function caseInSwitch(val){
    var answer = " ";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        default://default option in switch statements
//you just add a default function so as whenever we paste anything other than in the switch it will paste that.
            answer= "invalid input";
            break;
    }
    return answer;
}
console.log(caseInSwitch(7));

//multiple input giving the same output
function weekDays(holiday){
    var answer = " ";
    switch(holiday){
        case 1:
        case 2:
        case 3:
            answer = "weekday";
            break;
        case 3:
        case 4:
        case 5:
            answer = "it is almost there";
            break;
        case 6:
        case 7:
            answer = "weekend is here";
            break;
            default:
                answer = "oops we are sorry";
                break;   
    }
    return answer;
}
console.log(weekDays(2));

//returning boolean
function isLess(a, b){
    return a > b;
}
console.log(isLess(5,4));

//counting cards
//object they use indexes 
//propert is anything before the colonObject.
var testObject = {
    "hat": "ballcap",
    "shirt": "Jersey",
    "shoes": "cleats"
};
delete testObject.shoes;

console.log(testObject);


//trial in w3school

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

console.log("Hello my name is " + " " + person.firstName + " " + person.lastName + " I  am " + " "+ person.age + " years old");
 //javascript properties
 //eg obejctNmae.property(person.age), objectName["propert"](person["age"]), obejectName[expression] (x = "age; person[x]")
// you can add an object or delete by using (eg delete person.age)
//Nested object
/*myObj = {
  name:"John",
  age:30,
  cars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}
console.log(myObj.cars["car2"]);
*/

//Values in objects can be arrays, and values in arrays can be objects:
let myObj = { name: "Chris", age: 38 };
myObj;
let myString = JSON.stringify(myObj);
myString;

console.log(myObj); // This will log the myObj object to the console
console.log(myString); // This will log the JSON string to the console

//play along with me
function myAccount(x, y){
    if (x > y){
        return "keep up";
    } else if (x >= y){
        return "average";
    }else if (x < y){
    return "work hard";
    }
}
console.log(myAccount(10, 9));
    

const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}


