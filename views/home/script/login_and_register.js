function loginAndRegisterButtons() {
    let $loginButton = $('.btn-login'),
        $registerButton = $('.btn-register'),
        $container = $('.container');

    $loginButton.on('click', function() {
        $container.load('login.html');
    });

    $registerButton.on('click', function() {
        $container.load('register.html');
    });

}