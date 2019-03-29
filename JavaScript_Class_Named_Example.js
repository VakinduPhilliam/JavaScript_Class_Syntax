
/* JavaScript Naming Classes. */
/* Like Named Function Expressions, classes may also have a name, that is visible only inside that class. */

let User = class MyClass {

  sayHi() {

    alert(MyClass); // MyClass is visible only inside the class

  }
};

new User().sayHi(); // works, shows MyClass definition

alert(MyClass); // error, MyClass not visible outside of the class
