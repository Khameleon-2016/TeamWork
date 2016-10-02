//import { requester } from 'request';
import { requester } from '../http-request/request.js';

var contactController = function() {

    requester
        .get('templates/contact.html')
        .then((template) => {
            $('.content').html(template);
        });
};

export { contactController };