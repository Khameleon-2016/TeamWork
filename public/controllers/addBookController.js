import { requester } from '../http-request/request.js';

const addBookController = () => {
    var books = firebase.database().ref().child('books'),
        book,
        $author,
        $name,
        $description,
        $img;

    class Book {
      constructor(author, name, genre, description, imgUrl) {
        this.author = author;
        this.name = name;
        this.genre = genre;
        this.description = description;
        this.imgUrl = imgUrl;
      }

      get author() {
        return this._author;
      }

      set author(author) {
        this._author = author;
      }

      get name() {
        return this._name;
      }

      set name(name) {
        this._name = name;
      }

      get genre() {
        return this._genre;
      }

      set genre(value) {
        this._genre = value;
      }

      get description() {
        return this._description;
      }

      set description(description) {
        this._description = description;
      }

      get imgUrl() {
        return this._imgUrl;
      }

      set imgUrl(imgUrl) {
        this._imgUrl = imgUrl;
      }

      toObject() {
        return {
          author: this.author,
          name: this.name,
          description: this.description,
          img: this.imgUrl
        }
      }
    }

    requester
      .get('templates/addBook-template.html')
      .done((template) => {
        $('.content').html(template);

        $('.addBook').on('click', () => {

          $author = $('#author').val();
          $name = $('#name').val();
          $description = $('#description').val();
          $img = $('#imgUrl').val();

          book = new Book($author, $name, '', $description, $img);

          books.push(book.toObject());

        });
      });
};

export { addBookController };
