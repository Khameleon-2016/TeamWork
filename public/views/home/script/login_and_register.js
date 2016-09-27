function loginAndRegisterButtons() {
    let $loginButton = $('.btn-login'),
        $registerButton = $('.btn-register'),
        $mainSection = $('.base-docs-section');

    $loginButton.on('click', function() {
        console.log('login');
        $mainSection.load('/login.html');
    });

    $registerButton.on('click', function() {
        console.log('reg');
        $mainSection.load('/register.html');
    });

}