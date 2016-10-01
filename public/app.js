import { homeController } from './controllers/homeController.js';

import { signupController } from './controllers/signupController.js';
import { signinController } from './controllers/signinController.js';

import { booksController } from './controllers/booksController.js';
import { randomBookController } from './controllers/randomBookController.js';
import { authorsController } from './controllers/authorsController.js';
import { contactController } from './controllers/contactController.js';

import { addAuthorController } from './controllers/addAuthorController.js';

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

    this.get('#/random-book', () => {
        randomBookController();
    });

    this.get('#/authors', () => {
        authorsController();
    });

    this.get('#/contacts', () => {
        contactController();
    });

    this.get('#/addAuthor', () => {
      addAuthorController();
    });
    
});

app.run('#/home');
