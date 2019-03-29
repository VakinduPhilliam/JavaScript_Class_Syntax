/* Creating a class by given parameters (title, date etc). */
/* To do this, we can make a static method of the class. */

class Article {

  constructor(title, date) {

    this.title = title;

    this.date = date;

 }

  static createTodays() {

    // remember, this = Article

    return new this("Today's digest", new Date());

  }
}

let article = Article.createTodays();

alert( article.title ); // Todays digest

