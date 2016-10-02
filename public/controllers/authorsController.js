import { requester } from '../http-request/request.js';

const authorsController = function() {
    var database = firebase.database().ref(),
        authors,
        compile;

    requester
        .get('templates/authors-template.handlebars')
        .done((template) => {
            database.on('value', (data) => {
                compile = Handlebars.compile(template);
                // Convert object to array.
                authors = $.map(data.val().authors, (value, index) => {
                    return [value];
                });

                console.log(authors);

                $('.content').html(compile(authors));

            });

        });
};

export { authorsController };
