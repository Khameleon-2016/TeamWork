//import { requester } from 'request';
import { requester } from '../http-request/request.js';

const booksController = function() {
    var books = firebase.database().ref('/books'),
        compile;

    requester
        .get('templates/books-template.handlebars')
        .done((template) => {

            books.on('value', (data) => {
                compile = Handlebars.compile(template);

                $('.content').html(compile(data.val()));
            });
        });
};

export { booksController };