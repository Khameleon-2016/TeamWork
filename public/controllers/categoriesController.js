import { requester } from '../http-request/request.js';

var categoriesController = function() {
    var allBooks = [],
        booksByGenres = [],
        genres = [];

    requester
        .get('templates/categories.handlebars')
        .then((template) => {
            let dbObject = firebase.database().ref().child('books');
            dbObject.on('value', function(el) {
                var books = el.val();
                // var books = $.map(el.val().books, (value, index) => {
                //     return [value];
                // });
                books.forEach(function(book) {
                    book.genre.forEach(function(genre) {
                        if (!booksByGenres[genre]) {
                            booksByGenres[genre] = [];
                            genres.push(genre);
                        }

                        booksByGenres[genre].push(book);
                    });
                });

                var compile = Handlebars.compile(template);
                var compiled = compile({
                    books,
                    genres: genres
                });

                $('.content').html(compiled);

                var btn = document.getElementById('select-genre');
                var select = document.getElementById('genre');
                btn.addEventListener('click', function() {
                    let selectedGenre = select.options[select.selectedIndex].text,
                        booksForCurrentGenre = booksByGenres[selectedGenre];

                    requester
                        .get('templates/categories-books.handlebars')
                        .then((template) => {
                            var compile = Handlebars.compile(template);
                            var compiled = compile({
                                books: booksForCurrentGenre
                            });

                            $('#result-container').html(compiled);
                        });
                });
            });
        });
};

export { categoriesController };