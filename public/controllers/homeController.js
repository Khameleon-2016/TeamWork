const homeController = function() {
    $.ajax({
        url: 'templates/home-page.html',
        type: 'GET'
    }).done((template) => {
        $('.content').html(template);
    });
};

export { homeController };