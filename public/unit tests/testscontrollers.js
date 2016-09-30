import { authorsController } from 'authors';
import { booksController } from 'books';
import { contactController } from 'contact';
import { homeController } from 'home';
import { randomBookController } from 'randomBook';
import { signinController } from 'signin';
import { signupController } from 'signup';


mocha.setup('bdd');
var expect = chai.expect;

describe('Test all of the controllers in the application', function() {

    it('Authors controller should be a function', function() {
        var result = authorsController;
        expect(result).to.be.a('function');
    });

    it('Books controller should be a function', function() {
        var result = booksController;
        expect(result).to.be.a('function');
    });

    it('Contact controller should be a function', function() {
        var result = contactController;
        expect(result).to.be.a('function');
    });

    it('Home controller should be a function', function() {
        var result = homeController;
        expect(result).to.be.a('function');
    });

    it('Random book controller should be a function', function() {
        var result = randomBookController;
        expect(result).to.be.a('function');
    });

    it('Signin controller should be a function', function() {
        var result = signinController;
        expect(result).to.be.a('function');
    });

    it('Signup controller should be a function', function() {
        var result = signupController;
        expect(result).to.be.a('function');
    });

});

mocha.run();