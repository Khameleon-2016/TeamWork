var contactController = function() {

    $.ajax({
        url: '/templates/contact.html',
        method: 'GET'
    }).then((template) => {
        $('.content').html(template);
    });
};

export { contactController };