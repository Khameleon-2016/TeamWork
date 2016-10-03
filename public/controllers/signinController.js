//import { requester } from 'request';
import { requester } from '../http-request/request.js';

const signinController = function() {
    var $email,
        $password,
        auth = firebase.auth(),
        $message = $('<p />');

    requester
        .get('templates/sign-in-form.html')
        .done((template) => {
            $('.content').html(template);

            $('.signin').on('click', () => {

                $email = $('.email').val();
                $password = $('.password').val();

                auth.signInWithEmailAndPassword($email, $password)
                    .catch((error) => {
                        console.log(error.code);
                    });

                toastr.success('Now you can add your favorite authors and books.', 'You logged in successfully!');
            });
        });
};

export { signinController };