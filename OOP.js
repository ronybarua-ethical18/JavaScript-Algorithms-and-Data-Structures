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