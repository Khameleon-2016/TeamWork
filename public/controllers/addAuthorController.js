import { requester } from '../http-request/request.js';

const addAuthorController = () => {
    var authors = firebase.database().ref('authors'),
        key,
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

        toObject() {
            return {
                name: this._name,
                description: this._description,
                img: this._imgUrl
            };
        }
    }

    requester
        .get('templates/addAuthor-template.html')
        .done((template) => {
            $('.content').html(template);
            //console.log($('#name').val());

            $('.addAuthor').on('click', () => {

                $name = $('#name').val();
                $description = $('#description').val();
                $imgUrl = $('#imgUrl').val();

                //console.log($('#name').val());

                author = new Author($name, $description, $imgUrl);

                authors.push(author.toObject());

            });

        });
};

export { addAuthorController };