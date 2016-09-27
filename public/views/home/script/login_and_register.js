function loginAndRegisterButtons() {
    let $loginButton = $('.btn-login'),
        $registerButton = $('.btn-register'),
        $mainSection = $('.base-docs-section');

    $loginButton.on('click', function() {
        $mainSection.load('login.html');
    });

    $registerButton.on('click', function() {
        $mainSection.load('register.html');
    });

}