import { requester } from '../http-request/request.js';

const authorsController = function() {
    var authors = firebase.database().ref('/authors'),
        compile;

    requester
        .get('templates/authors-template.handlebars')
        .done((template) => {
            authors.on('value', (data) => {
                compile = Handlebars.compile(template);

                $('.content').html(compile(data.val()));
            });

        });
};

export { authorsController };
