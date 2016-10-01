//import { requester } from 'request';
import { requester } from '../http-request/request.js';

const homeController = function() {
    requester
        .get('templates/home-page.html')
        .done((template) => {
            $('.content').html(template);
        });
};

export { homeController };
