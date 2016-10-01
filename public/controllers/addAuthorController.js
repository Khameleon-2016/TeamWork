import { requester } from '../http-request/request.js';

const addAuthorController = () => {
  var auth = firebase.auth();

  requester
      .get('templates/addAuthor-template.html')
      .done((template) => {
        $('.content').html(template);
      });
};

export { addAuthorController };
