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
        });
    
    });
};

export { authorsController };