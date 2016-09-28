const authorsController = function() {
    var authors = firebase.database().ref('/authors'),
        compile;
        
    $.ajax({
        url: 'templates/authors-template.handlebars',
        type: 'GET'
    }).done((template) => {

        authors.on('value', (data) => {
            compile = Handlebars.compile(template);

            $('.content').html(compile(data.val()));
            
           /* $('.descriptionBtn').on('click', () => {
                $('#description').removeClass('hide');
                 console.log("sffdfsdf");
                $('#description').addClass('show');
            });*/

            // The show and hide buttons but they are still in editing please do not touch them!!!!!!!!!!!!!!!!!!!

            $('.showDescriptionBtn').on('click', () => {
                $('#description').removeClass('hide');
            });

            $('.hideDescriptionBtn').on('click', () => {
                $('#description').addClass('hide');
            });
         
        
        });

    });
};

export { authorsController };