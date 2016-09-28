const booksController = function() {
    var books = firebase.database().ref('/books'),
        compile;

    $.ajax({
        url: 'templates/books-template.handlebars',
        type: 'GET'
    }).done((template) => {

        books.on('value', (data) => {
            compile = Handlebars.compile(template);

            $('.content').html(compile(data.val()));
        });
    });
};

export { booksController };