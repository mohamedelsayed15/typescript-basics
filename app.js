"use strict";
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const buttonElement = document.querySelector('button'); //ignore 
const numResults = [];
const stringResults = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + '    ' + num2;
    }
}
function printResult(obj) {
    console.log(obj.val);
    console.log(obj.timestamp);
}
buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    numResults.push(result);
    const stringResult = add(num1, num2);
    stringResults.push(stringResult);
    //console.log(result)
    //console.log(stringResult)
    printResult({ val: result, timestamp: new Date() });
    //console.table(numResults,stringResults)
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('my promise is fulfilled');
    }, 1000);
});
myPromise.then(value => {
    console.log(value.split(' is '));
});
