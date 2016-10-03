import { addBookController } from 'addBook';
import { addAuthorController } from 'addAuthor';

mocha.setup('bdd');
var expect = chai.expect;

describe('Test AddBookController and AddAuthorController', function() {

    it('AddBookController should be a function', function() {
        var result = addBookController;
        expect(result).to.be.a('function');

    });

    it('AddBookController should create new book', function() {
        var name = "Gosho";
        // //var firebase = 'dwqw';
        // var controller = addBookController.createBook;
        // console.log(controller);
        // var book = new addBookController.createBook('ewefew', 'dewew', 'dewdew', 'ewfwe', 'wefwe');
        // console.log(book);
        expect(name).to.be.a('object');
    });

    it('AddAuthorController should be a function', function() {
        var result = addAuthorController;
        expect(result).to.be.a('function');

    });



});

mocha.run();