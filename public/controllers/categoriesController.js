import { requester } from '../http-request/request.js';

var categoriesController = function() {

    requester
        .get('templates/categories.html')
        .then((template) => {
            $('.content').html(template);
            var result = firebase.database().ref().child('books');
            console.log(result);
        });

    
};

export { categoriesController };