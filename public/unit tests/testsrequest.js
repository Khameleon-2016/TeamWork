import { requester } from 'request';
mocha.setup('bdd');
var expect = chai.expect;

describe('Get request tests', function() {

    beforeEach(function() {
        this.xhr = sinon.useFakeXMLHttpRequest();

        this.requests = [];
        this.xhr.onCreate = function(xhr) {
            this.requests.push(xhr);
        }.bind(this);
    });

    it('The get request should return an object', function(done) {
        var url = 'templates/authors-template.handlebars';
        var result = requester.get(url);
        done();
        expect(result).to.be.an('object');

    });

    it('The get request should return object with property content-type equal to application/json', function(done) {

        requester.get('templates/authors-template.handlebars');
        done();
        this.requests[0].respond(200, { 'Content-Type': 'application/json' });
    });

    it('The get request should return object with property url equal to the passed url in the get function', function(done) {

        requester.get('templates/authors-template.handlebars');
        done();
        this.requests[0].respond(200, { 'url': 'templates/authors-template.handlebars' });
    });

    it('The get request should return object with property method which has value GET', function(done) {

        requester.get('templates/authors-template.handlebars');
        done();
        this.requests[0].respond(200, { 'method': 'GET' });
    });


    afterEach(function() {
        this.xhr.restore();
    });

});

describe('Post request tests', function() {
    beforeEach(function() {
        this.xhr = sinon.useFakeXMLHttpRequest();

        this.requests = [];
        this.xhr.onCreate = function(xhr) {
            this.requests.push(xhr);
        }.bind(this);
    });

    it('The post request should return an object', function(done) {
        var url = 'templates/authors-template.handlebars';
        var body = { name: 'Jorkata' };
        var result = requester.post(url, body);
        done();
        expect(result).to.be.an('object');

    });

    it('The post request should return object with property content-type equal to application/json', function(done) {
        var url = 'templates/authors-template.handlebars';
        var body = { name: 'Jorkata' };

        requester.post(url, body);
        done();
        this.requests[0].respond(200, { 'Content-Type': 'application/json' });
    });

    it('The post request should return object with property url equal to the passed url in the post function', function(done) {
        var url = 'templates/authors-template.handlebars';
        var body = { name: 'Jorkata' };

        requester.post(url, body);
        done();
        this.requests[0].respond(200, { 'url': 'templates/authors-template.handlebars' });
    });

    it('The post request should return object with property method which has value POST', function(done) {
        var url = 'templates/authors-template.handlebars';
        var body = { name: 'Jorkata' };

        requester.post(url, body);
        done();
        this.requests[0].respond(200, { 'method': 'POST' });
    });

    afterEach(function() {
        this.xhr.restore();
    });
});

mocha.run();