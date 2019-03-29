/* JavaScript Class Static methods. */
/* We can also assign methods to the class function, not to its "prototype". Such methods are called static. */

class User {

  static staticMethod() {

    alert(this === User);

  }
}

User.staticMethod(); // true

/* That actually does the same as assigning it as a function property: */

function User() { }

User.staticMethod = function() {

  alert(this === User);

};

