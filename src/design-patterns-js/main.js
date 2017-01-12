(function() {
'use strict';

    // Ways to create JavaScript objects
    // as described by Stoyan: http://www.phpied.com/3-ways-to-define-a-javascript-class/

    /*

        - JavaScript classes introduced in ECMAScript 6 are syntactical sugar over
        JavaScript's existing prototype-based inheritance. The class syntax is
        not introducing a new object-oriented inheritance model to JavaScript.
        JavaScript classes provide a much simpler and clearer syntax to create
        objects and deal with inheritance.

        - there are no classes in JavaScript (JavaScript is a class-less language)

        - In JavaScript everything is an object. And when it comes to
        inheritance, objects inherit from objects, not classes from classes as
        in the "class"-ical languages.

    */

    // 1. Using a function (new keyword)

    function Fruit (name) {
        this.name = name;
        this.color = 0;
        this.age = 0;

        // methods defined internally
        this.getInfo = function () {
            return "name: " + this.name + ", age: " + this.age;
        };
    }

    // Defining methods using the prototype
    Fruit.prototype.makeOlder = function (years) {
        this.age += years;
    };

    const apple = new Fruit("jabłko");
    apple.age++;
    apple.age++;
    apple.age++;
    apple.makeOlder(10);
    console.log(apple.getInfo());

    // 2. Using object literals (singleton)

    // const obj1 = new Object(); // Object literal is preferred over the new Object()
    const obj1 = {};
    console.log(obj1);

    const obj2 = {
        name: "Kuba",
    };
    console.log(obj2);

    // 3. Singleton using combination of methods 1 and 2

    const animal = new function() {
        this.name = name;
    }();

    console.log(animal);

    // 4. BEST (in most cases), using prototypal inheritance (objects from objects)
    // - defined a create function to initiate (zero) proper properties
    // - use Object.create(object) to create new instances of "object" and inherit from it

    const Rectangle = {
        create: function(x, y) {
                const obj = Object.create(this); // own 'factory' method (avoid using 'constructor' name)
                obj.x = x;
                obj.y = y;
                obj.layers = []; // otherwise this will be always
                return obj;
        },
        x: 10,
        y: 10,
        layers: [],
        area: function() {
                return this.x * this.y;
        },
    };

    let rect = Rectangle.create(4, 4);
    console.log(rect);

    // prototypal inheritance from Rectangle
    const Square = Object.create(Rectangle);
    Square.create = function(side) {
        return Rectangle.create(side, side);
    };

    let square = Square.create(99);
    console.log(square.area());

    // let a = Object.create(square);
    // a.x = 11;
    // a.y = 11;
    // console.log(a);
    // console.log(a.area());

    console.log("koniec");
})();
