const signinController = function() {
    var $email,
        $password,
        auth = firebase.auth(),
        $message = $('<p />');

    $.ajax({
        url: 'templates/sign-in-form.html',
        type: 'GET'
    }).done((template) => {
        $('.content').html(template);
        
        $email = $('.email').val();
        $password = $('.password').val();

        $('.signin').on('click', () => {
            
            auth.signInWithEmailAndPassword($email, $password)
            .catch((error) => {
                $message.html(error.message);
            });

            
            console.log($message.text());
        });
    });
};

export { signinController };