
/* JavaScript Class in-function Expressions. */
/* Just like functions, classes can be defined inside another expression, passed around, returned etc. */
/* Here’s a class-returning function (“class factory”): */

 function makeClass(phrase) {

  // declare a class and return it

  return class {

    sayHi() {

      alert(phrase);

    };
  };
}

let User = makeClass("Hello");

new User().sayHi(); // Hello
