import { homeController } from './controllers/homeController.js';
import { signupController } from './controllers/signupController.js';
import { signinController } from './controllers/signinController.js';
import { booksController } from './controllers/booksController.js';
import { authorsController } from './controllers/authorsController.js';

var app = $.sammy('.content', function() {

    this.get('#/home', () => {
        homeController();
    });

    this.get('#/signup', () => {
        signupController();
    });

    this.get('#/signin', () => {
        signinController();
    });

    this.get('#/books', () => {
        booksController();
    });

    this.get('#/authors', () => {

    });

});

app.run('#/home');