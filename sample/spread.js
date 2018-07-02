import React, { Component } from 'react';
const numbers = [1,2,3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

//taking in array of arguments
const filter = (...args) =>{
    return args.filter(el => el === 1);
    //=== checks for type and equality
}

console.log(filter(1,2,3));


[num1,num2] = numbers;
//to get all 3rd digit, [num1, , num3] = numbers
//space for second digit to be disregarded
console.log(num1, num2);