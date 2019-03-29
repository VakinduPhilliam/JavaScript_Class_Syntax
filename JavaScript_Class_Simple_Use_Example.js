
/* The JavaScript “class” syntax. */
/* The “class” construct allows developers to define prototype-based classes with a clean, nice-looking syntax. */
/* The class syntax is versatile, we’ll start with a simple example first. */
/* Here’s a prototype-based class User: */

function User(name) {
  this.name = name;
}

User.prototype.sayHi = function() {
  alert(this.name);
}

let user = new User("John");
user.sayHi();


/* And that’s the same using class syntax. */

 class User {

  constructor(name) {

    this.name = name;

  }

  sayHi() {

    alert(this.name);

  }

}

//Call User class

let user = new User("John");

user.sayHi();

/* It’s easy to see that the two examples are alike. Just please note that methods in a class do not have a comma between them. */
/* Novice developers sometimes forget it and put a comma between class methods, and things don’t work. That’s not a literal object, but a class syntax.*/
