
/* Getters/setters in JavaScript Classes. */
/* Classes may also include getters/setters. */
/* Here’s an example with user.name implemented using them: */

 class User {

  constructor(name) {

    // invokes the setter

    this.name = name;

  }

  get name() {

    return this._name;

  }

  set name(value) {

    if (value.length < 4) {

      alert("Name is too short.");

      return;
    }

    this._name = value;

  }

}

let user = new User("John");

alert(user.name); // John

user = new User(""); // Name too short.

