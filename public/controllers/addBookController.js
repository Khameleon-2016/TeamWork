import { requester } from '../http-request/request.js';

const addBookController = () => {
    var books = firebase.database().ref().child('books'),
        book,
        $author,
        $name,
        $description,
        $img,
        $genre;

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

        set genre(genre) {
            this._genre = genre;
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
                img: this.imgUrl,
                genre: this.genre
            };
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
                $genre = $('#genre').val();

                book = new Book($author, $name, $genre, $description, $img);

                books.push(book.toObject());

                toastr.success('You added book to the database!');
            });
        });
};

export { addBookController };