const signupController = function () {
    var $email,
        $password;
        //auth = firebase.auth();

    $.ajax({
        url: 'templates/sign-up-form.html',
        type: 'GET'
    }).done((template) => {
        $('.content').html(template);
    });
};

export { signupController };