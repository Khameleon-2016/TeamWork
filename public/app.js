import { homeController } from './controllers/homeController.js';

import { signupController } from './controllers/signupController.js';
import { signinController } from './controllers/signinController.js';

import { booksController } from './controllers/booksController.js';
import { categoriesController } from './controllers/categoriesController.js';
import { randomBookController } from './controllers/randomBookController.js';
import { authorsController } from './controllers/authorsController.js';
import { contactController } from './controllers/contactController.js';

import { addAuthorController } from './controllers/addAuthorController.js';
import { addBookController } from './controllers/addBookController.js';

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

    this.get('#/categories', () => {
        categoriesController();
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

    this.get('#/addBook', () => {
        addBookController();
    });

    this.get('#/signout', (context) => {
        context.redirect('#/home');
    });

    $('#signOut').on('click', () => {
        firebase.auth().signOut();
        $('.btn-login').removeClass('hidden');
        $('.btn-register').removeClass('hidden');
        $('#signOut').addClass('hidden');
        $('#addBook').addClass('hidden');
        $('#addAuthor').addClass('hidden');
        toastr.warning('You signed out from the application!');
    });


    function show(selector) {
        $(selector).removeClass('hidden');
        $(selector).addClass('show');
    }

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            show('#signOut');
            show('#addBook');
            show('#addAuthor');
            $('.btn-login').addClass('hidden');
            $('.btn-register').addClass('hidden');
        }
    });

});

app.run('#/home');