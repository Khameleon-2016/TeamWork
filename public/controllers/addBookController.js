import { requester } from '../http-request/request.js';

const addBookController = () => {
    var books = firebase.database().ref('books'),
        $author,
        $name,
        $description,
        $img;

    class Book {
      constructor(author, name, description, imgUrl) {
        this.author = author;
        this.name = name;
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
      });
};

export { addBookController };
