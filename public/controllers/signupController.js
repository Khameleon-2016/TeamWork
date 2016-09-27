const signupController = function () {
    var $email,
        $password,
        auth = firebase.auth();

    $.ajax({
        url: 'templates/sign-up-form.html',
        type: 'GET'
    }).done((template) => {
        $('.content').html(template);


        $('.signup').on('click', () => {

            $email = $('.email').val();
            $password = $('.password').val();

            auth.createUserWithEmailAndPassword($email, $password)
            .catch((error) => {
                // TODO: Dimitar : Have to do when the user want to sign up but he has invalid data (email, password) to show a proper message.
                 
                console.log($email);
                console.log(error.code);
                console.log(error.message);
            });
        });
    });
};

export { signupController };