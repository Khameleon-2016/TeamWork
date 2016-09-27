const signinController = function() {
    var $email,
        $password,
        auth = firebase.auth();

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
                console.log(error.code);
                console.log(error.message);
            });

            console.log("sdffd");
        });
    });
};

export { signinController };