chai.should();
var firebase = ' sda';
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

// describe('Post request tests', function() {
//     beforeEach(function() {
//         this.xhr = sinon.useFakeXMLHttpRequest();

//         this.requests = [];
//         this.xhr.onCreate = function(xhr) {
//             this.requests.push(xhr);
//         }.bind(this);
//     });

//     it('The post request should return an object', function(done) {
//         var url = 'templates/authors-template.handlebars';
//         var body = { name: 'Jorkata' };
//         var result = requester.post(url, body);
//         done();
//         expect(result).to.be.an('object');

//     });

//     it('The post request should return object with property content-type equal to application/json', function(done) {
//         var url = 'templates/authors-template.handlebars';
//         var body = { name: 'Jorkata' };

//         requester.post(url, body);
//         done();
//         this.requests[0].respond(200, { 'Content-Type': 'application/json' });
//     });

//     it('The post request should return object with property url equal to the passed url in the post function', function(done) {
//         var url = 'templates/authors-template.handlebars';
//         var body = { name: 'Jorkata' };

//         requester.post(url, body);
//         done();
//         this.requests[0].respond(200, { 'url': 'templates/authors-template.handlebars' });
//     });

//     it('The post request should return object with property method which has value POST', function(done) {
//         var url = 'templates/authors-template.handlebars';
//         var body = { name: 'Jorkata' };

//         requester.post(url, body);
//         done();
//         this.requests[0].respond(200, { 'method': 'POST' });
//     });

//     afterEach(function() {
//         this.xhr.restore();
//     });
// });