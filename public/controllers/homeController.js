const homeController = function() {
    $.ajax({
        url: 'teamplates/home-page.html',
        type: 'GET'
    }).done((template) => {
        $('.content').html(template);
    }) ;
};

export { homeController };