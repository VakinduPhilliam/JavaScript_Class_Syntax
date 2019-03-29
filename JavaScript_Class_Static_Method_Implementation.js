/* Usually, static methods are used to implement functions that belong to the class, but not to any particular object of it. */
/* For instance, if we have Article objects and need a function to compare them. The natural choice would be Article.compare, like this: */

 class Article {

  constructor(title, date) {

    this.title = title;

    this.date = date;

  }

  static compare(articleA, articleB) {

    return articleA.date - articleB.date;

  }
}

// usage

let articles = [
  new Article("Mind", new Date(2016, 1, 1)),
  new Article("Body", new Date(2016, 0, 1)),
  new Article("JavaScript", new Date(2016, 11, 1))
];

articles.sort(Article.compare);

alert( articles[0].title ); // Body

