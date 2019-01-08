// // Задача 1.


const arr = [1,2,3];
 
function multiply(items){
  return items ?  items.reduce((current, item) => current * item) : 0
}
 
multiply(arr);


// // Задача 2.

function reverseStr(str) {
     return str.split("").reverse().join("")
}
    
     
reverseStr("test");



// // Задача 3.


let str = "hello";

function getCodeStringFromText(str) {
    let newStr = "";
    if (!isNaN(parseInt(str))){
        let arr = str.split(" ");
        for (let j = 0; j < arr.length; j++) {
            let arr2 = parseInt(arr[j]);
            newStr += String.fromCharCode(arr2);
        }
    } else {
        for (let i = 0; i < str.length; i++) {
            newStr += str.charCodeAt(i) + " ";
        }
    }
    return newStr;
    
}

getCodeStringFromText(str);


// // Задача 4.

function guessNumber(a){
    

    if ( a > 10) {
        return 'Ошибка';
    } else if (a <= 0) {
        return 'Ошибка';
    } else if (a === rand ) {
        return 'Вы выиграли';
    } else {
        return 'Вы не угадали ваше число ' +  a + ' а выпало число ' +  rand; 
    }

}

let a = 3;
let rand = Math.round(Math.random() * (10 - 1)) + 1;

console.log (guessNumber(a));





// // Задача 5.

function arr() {
    let foo = [];
    let N = 10;

    for (let i = 1; i <= N; i++) {
        foo.push(i);   
    }
    return foo;   
}
arr();





// // Задача 6.


let a = [1,2,3];

function doubleArray(a){
    return a.concat(a);
}
 
doubleArray(a);


// // Задача 7.

function changeCollection() {
    let handler = arguments[arguments.length - 1];
        
    for (let i = 0; i < arguments.length - 1; i++) {
        var array = arguments[i];
        
        handler(array);
    }
}

function deleteFunc(array) {
array.shift();
}

let one = [1 ,2 ,3];
let two = ['a','b', 'c'];
let res = [one, two];

  











































