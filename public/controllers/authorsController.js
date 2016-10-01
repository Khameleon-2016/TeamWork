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

                /* $('.descriptionBtn').on('click', () => {
                     $('#description').removeClass('hide');
                      console.log("sffdfsdf");
                     $('#description').addClass('show');
                 });*/

                // The show and hide buttons but they are still in editing please do not touch them!!!!!!!!!!!!!!!!!!!

            });

        });
};

export { authorsController };
