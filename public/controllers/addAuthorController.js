import { requester } from '../http-request/request.js';

const addAuthorController = () => {
  var data = firebase.database(),
      auth = firebase.auth(),
      $name,
      $description,
      $imgUrl,
      author;

  class Author {
    constructor(name, description, imgUrl) {
      this.name = name;
      this.description = description;
      this.imgUrl = imgUrl;
    }

    get name() {
      return this._name;
    }

    set name(name) {
      this._name = name;
    }

    get description() {
      return this._description;
    }

    set description(description) {
      this._description = description;
    }

    get imgUrl() {
      return this._imgUrl;
    }

    set imgUrl(imgUrl) {
      this._imgUrl = imgUrl;
    }

    toJSON() {
      return JSON.stringify({
        name: this._name,
        description: this._description,
        imgUrl: this._imgUrl
      });
    }
  }

  requester
      .get('templates/addAuthor-template.html')
      .done((template) => {
        $('.content').html(template);

        $('#addAuthor').on('click', () => {
          console.log("sdfsdf");

          $name = $('#name').val();
          $description = $('#description').val();
          $imgUrl = $('#imgUrl').val();

          auth.onAuthStateChanged((user) => {
            if (!user) {
              alert('sfgdfgdfgd');
            }
          });

          author = new Author($name, $description, $imgUrl);
        });

      });
};

export { addAuthorController };
