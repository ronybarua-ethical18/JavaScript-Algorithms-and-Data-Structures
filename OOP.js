// Object Oriented Programming

/* Object-oriented programming is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields, and code, in the form of procedures. A feature of objects is that an object's own procedures can access and often modify the data fields of itself */

// C1.Create a Basic JavaScript Object----------------------------------------------------------

/* let dog = {
    name: 'tom',
    numLegs: 4
}; */

//---------------------------------------------------------------------------------------------

// C2.Use Dot Notation to Access the Properties of an Object------------------------------------

/* let dog = {
    name: "Spot",
    numLegs: 4
  };
  console.log(dog.name, dog.numLegs); */

//---------------------------------------------------------------------------------------------

// C3. Create a Method on an Object------------------------------------------------------------

/* let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs:function(){
    return result = "The name of this duck is " + dog.name + ".";
    } 
  };
 console.log(dog.sayLegs());  */

//---------------------------------------------------------------------------------------------

// C4. Make Code More Reusable with the this Keyword-------------------------------------------

/* If the variable name changes, any code referencing the original name would need to be updated as well. In a short object definition, it isn't a problem, but if an object has many references to its properties there is a greater chance for error.

A way to avoid these issues is with the this keyword: */

/* If the object's name is changed to mallard, it is not necessary to find all the references to duck in the code. It makes the code reusable and easier to read. */

/* let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  dog.sayLegs(); */

//-----------------------------------------------------------------------------------------

// C5. Define a Constructor Function ------------------------------------------------------

// Constructors are functions that create new objects. 
/* 1. Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.

2. Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.

3. Constructors define properties and behaviors instead of returning a value as other functions might. */

/* function Dog(){
    this.name = 'tommy',
    this.color = 'brown',
    this.numLegs = 4
} */

//-----------------------------------------------------------------------------------------

// C6. Use a Constructor to Create Objects ------------------------------------------------

/* function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  const hound = new Dog();
  console.log(hound.name); */

/* new operator is used when calling a constructor. This tells JavaScript to create a new instance of Bird called blueBird. Without the new operator, this inside the constructor would not point to the newly created object */

//------------------------------------------------------------------------------------------

// C7. Extend Constructors to Receive Arguments --------------------------------------------

/* Suppose you were writing a program to keep track of hundreds or even thousands of different birds in an aviary. It would take a lot of time to create all the birds, then change the properties to different values for every one. To more easily create different Bird objects, you can design your Bird constructor to accept parameters: */

function Dog(name, color) {
    this.name = name,
        this.color = color,
        this.numLegs = 4;
}
let terrier = new Dog("Tommy", "Joe");
let terrier2 = new Dog("pummy", "brown");
console.log(terrier, terrier2);

//---------------------------------------------------------------------------------------

// C8. Verify an Object's Constructor with instanceof -----------------------------------

/* Anytime a constructor function creates a new object, that object is said to be an instance of its constructor. JavaScript gives a convenient way to verify this with the instanceof operator. instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor. */

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}
const myHouse = new House(5);
// console.log(myHouse instanceof House);

//---------------------------------------------------------------------------------------------

// C9. Understand Own Properties -------------------------------------------------------------

/* function Bird(name) {
    this.name  = name;
    this.numLegs = 2;
  }
  
  let duck = new Bird("Donald");
  let canary = new Bird("Tweety");

let ownProps = [];
for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}
console.log(ownProps);
 */
/* 
name and numLegs are called own properties, because they are defined directly on the instance object. That means that duck and canary each has its own separate copy of these properties. In fact every instance of Bird will have its own copy of these properties. The following code adds all of the own properties of duck to the array ownProps: */

//---------------------------------------------------------------------------------------------

// C10. Use Prototype Properties to Reduce Duplicate Code--------------------------------------

/* Prototypes allow you to easily define methods to all instances of a particular object. The beauty is that the method is applied to the prototype, so it is only stored in the memory once, but every instance of the object has access to it. */

/* function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 2;
// Only change code above this line
let beagle = new Dog("Snoopy");
let peaCock = new Dog("Crimpie");
console.log(beagle.numLegs);
console.log(peaCock.numLegs);
function Dog(name) {
    this.name = name;
}
Dog.prototype.numLegs = 2;
// Only change code above this line
let beagle = new Dog("Snoopy");
let peaCock = new Dog("Crimpie");
console.log(beagle.numLegs);
console.log(peaCock.numLegs); */


//----------------------------------------------------------------------------------------------

// C11. Iterate Over All Properties------------------------------------------------------------

/* You have now seen two kinds of properties: own properties and prototype properties. Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype. */

/* function Bird(name){
    this.name = name;
}
Bird.prototype.numLegs = 2;
const duck = new Bird('Snoopy');
let ownProps = [];
let prototypeProps = [];
for(let property in duck){
    if(duck.hasOwnProperty(property)){
        ownProps.push(property);
    }
    else{
        prototypeProps.push(property);
    }
}
console.log(ownProps);
console.log(prototypeProps); */

//-------------------------------------------------------------------------------------------

// C12. Understand the Constructor Property--------------------------------------------------

/* the constructor property is a reference to the constructor function that created the instance. The advantage of the constructor property is that it's possible to check for this property to find out what kind of object it is. Here's an example of how this could be used: */

/* let duck = new Bird();
let beagle = new Dog();
console.log(duck.constructor == Bird);
console.log(beagle.constructor == Dog); */ //this is the alternative of instanceof

function Dog(name) {
    this.name = name;
}
// Only change code below this line
function joinDogFraternity(candidate) {
    if (candidate.constructor == Dog) {
        return true;
    }
    else {
        return false;
    }
}

//-------------------------------------------------------------------------------------------

//C13. Change the Prototype to a New Object ------------------------------------------------

function Cat(name) {
    this.name = name;
}
Cat.prototype = {
    numLegs: 2,
    eat: function () {
        console.log('i am eating nom nom nom');
    },
    work: function () {
        console.log('meaow meaow');
    }
};
let catBark = new Cat('Paoli');
let catSound = new Cat('owao');
console.log(catSound.numLegs);

//--------------------------------------------------------------------------------------------

// C14. Remember to Set the Constructor Property when Changing the Prototype------------------

/* There is one crucial side effect of manually setting the prototype to a new object. It erases the constructor property! This property can be used to check which constructor function created the instance, but since the property has been overwritten, it now gives false results: */

function Dog(name) {
    this.name = name;
}

// Only change code below this line
Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};

//--------------------------------------------------------------------------------------

// C14. Understand Where an Object’s Prototype Comes From---------------------------------

/*  function Dog(name) {
   this.name = name;
 }
 let beagle = new Dog("Snoopy");
 console.log(Dog.prototype.isPrototypeOf(beagle)); */

//-------------------------------------------------------------------------------------

//   C15. Understand the Prototype Chain ------------------------------------------------

/* a prototype is an object, a prototype can have its own prototype! In this case, the prototype of Bird.prototype is Object.prototype: */

function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

console.log(Dog.prototype.isPrototypeOf(beagle));  // yields true
Object.prototype.isPrototypeOf(Dog.prototype); //prototype chain

//------------------------------------------------------------------------------------

//C16. Use Inheritance So You Don't Repeat Yoursel ----------------------------------

/* There's a principle in programming called Don't Repeat Yourself (DRY). The reason repeated code is a problem is because any change requires fixing code in multiple places. This usually means more work for programmers and more room for errors. */

/* function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Cat,
};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Bear,
};

function Animal() { }
Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
}; */

//-----------------------------------------------------------------------------------------

// C17. Inherit Behaviors from a Supertype ------------------------------------------------

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

let animal = new Animal(); //creating object using new

let duck = Object.create(Animal.prototype); // creating object using Object.create
let beagle = Object.create(Animal.prototype); // creating object using Object.create

//--------------------------------------------------------------------------------------

// C18. Set the Child's Prototype to an Instance of the Parent -------------------------

function Animal() { }
Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    },
    numLegs: 5
};

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);
let dogBark = Object.create(Animal.prototype);
dogBark.eat(); //dogBark inherits all of Animal's properties, including the eat method.

//--------------------------------------------------------------------------------------

// C19. Reset an Inherited Constructor Property ----------------------------------------

/* When an object inherits its prototype from another object, it also inherits the supertype's constructor property. */

/* function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor // function Animal(){...} */

/* But duck and all instances of Bird should show that they were constructed by Bird and not Animal. To do so, you can manually set Bird's constructor property to the Bird object: */

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line


Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;
let duck = new Bird();
console.log(duck.constructor);
let beagle = new Dog();

//---------------------------------------------------------------------------------------

// C20. Add Methods After Inheritance ---------------------------------------------------

/* A constructor function that inherits its prototype object from a supertype constructor function can still have its own methods in addition to inherited methods. */

/* function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// adding method after inheritance
Dog.prototype.bark = function(){
    console.log("Woof!");
}

let beagle = new Dog(); */


//Override Inherited Methods----------------------------------------------------------

Dog.prototype.eat = function () {
    console.log("chop chop chop");
};

//C21. Use a Mixin to Add Common Behavior Between Unrelated Objects--------------------

/* let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  let glideMixin = function(obj){
    obj.glide = function(){
      console.log("Gliding , woosh!")
    }
  }
  glideMixin(bird);
  glideMixin(boat); */

//---------------------------------------------------------------------------------------


// C22. Use Closure to Protect Properties Within an Object from Being Modified Externally--

/* The simplest way to make this public property private is by creating a variable within the constructor function. This changes the scope of that variable to be within the constructor function versus available globally. This way, the variable can only be accessed and changed by methods also within the constructor function. */

/* function Bird() {
    let weight = 15; //private variable
    this.getWeight = function(){
      return weight;
    }
  } */

//----------------------------------------------------------------------------------------

//   C23. Understand the Immediately Invoked Function Expression (IIFE)---------------------

/* (function() {
    console.log("A cozy nest is ready");
  })(); */

//------------------------------------------------------------------------------------------

// C24.  Use an IIFE to Create a Module ----------------------------------------------------

/* let motionModule = (function () {
    return {
        glideMixin: function (obj) {
            obj.glide = function () {
                console.log("Gliding on the water");
            };
        },
        flyMixin: function (obj) {
            obj.fly = function () {
                console.log("Flying, wooosh!");
            };
        }
    }
})(); */

/* Note that you have an immediately invoked function expression(IIFE) that returns an object motionModule.This returned object contains all of the mixin behaviors as properties of the object.The advantage of the module pattern is that all of the motion behaviors can be packaged into a single object that can then be used by other parts of your code.Here is an example using it:

motionModule.glideMixin(duck);
duck.glide(); */
