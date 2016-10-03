//import { requester } from 'request';
import { requester } from '../http-request/request.js';

const booksController = function() {
    var database = firebase.database().ref(),
        books,
        compile;

    requester
        .get('templates/books-template.handlebars')
        .done((template) => {

            database.on('value', (data) => {
                compile = Handlebars.compile(template);

                books = $.map(data.val().books, (value, index) => {
                    return [value];
                });

                $('.content').html(compile(books));
            });
        });
};

export { booksController };