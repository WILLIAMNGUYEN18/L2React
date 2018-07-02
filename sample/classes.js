import React, { Component } from 'react';
class Human {
    gender = 'male';
    //es6 was this.gender = 'male'

    /*
    es6
    printGender() {
        console.log(this.gender);
    }
    */
   printGender = () => {
       console.log(this.gender);
   }

}

class Person extends Human{
    name = 'Max';
    gender = 'female';

    printMyName(){
        console.log(this.name);
    }

}

const person1 = {
    name:'Max'
};

const newPerson = {
    ...person,
    age: 28
};

console.log(newPerson);

const person = new Person();
person.printMyName();
person.printGender();