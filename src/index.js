import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

class Animal {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log('I am', this.name, 'and I am', this.age, 'years old');
    }
}

const animal1 = new Animal('Steve', '11');
animal1.speak();

class Lion extends Animal {
    constructor(name, age, furColor, speed) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.furColor = furColor;
        this.speed = speed;
    }

    roar() {
        console.log('ROOAR! My fur color is', this.furColor,
            'and my speed is', this.speed, 'MPH');
    }
}

const lion1 = new Lion('Tim', 8, 'tan', 50);
lion1.speak();
lion1.roar();
