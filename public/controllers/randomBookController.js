//Uncomment all lines so the it canwork with genres too.
//TODO: Make the page prettier
//import { requester } from 'request';
import { requester } from '../http-request/request.js';

const randomBookController = function() {
    requester
        .get('templates/random-book-template.html')
        .done(function(template) {
            $('.content').html(template);
            var button = document.getElementById('get-random-book');
            let select = document.getElementById('genre');
            button.addEventListener('click', function(ev) {
                getBooksFromDB();
            });

            function getBooksFromDB() {
                var dbRefObject = firebase.database().ref().child('books');
                dbRefObject.on('value', function(el) {
                    var books = el.val(),
                        booksArr = Object.keys(books).map(function(key) {
                            return books[key];
                        }),
                        selectGenre = select.options[select.selectedIndex].text,
                        booksWithSelectedGenre = [];

                    booksArr.forEach(function(el) {
                        if (el.genre.indexOf(selectGenre) !== - 1) {
                            booksWithSelectedGenre.push(el);
                        }
                    });

                    showResult(randomBook(booksWithSelectedGenre));
                });

                function randomBook(books) {
                    return books[Math.floor(Math.random() * books.length)];
                }

                function showResult(book) {
                    let resultCotainer = document.getElementById('result-container'),
                        bookname = document.createElement('h3'),
                        author = document.createElement('h4'),
                        genre = document.createElement('h4'),
                        img = document.createElement('img'),
                        description = document.createElement('p');

                    resultCotainer.innerHTML = '';

                    if (book === undefined) {
                        resultCotainer.innerHTML = 'No books with the selected genre was found in the DataBase.';
                    } else {
                        bookname.innerText = book.name;
                        author.innerText = book.author;
                        genre.innerText = book.genre;

                        img.setAttribute('src', book.img);
                        img.style = 'width: 600px;';
                        img.style = 'height: 800px;';

                        description.innerText = book.description;

                        resultCotainer.appendChild(bookname);
                        resultCotainer.appendChild(author);
                        resultCotainer.appendChild(genre);
                        resultCotainer.appendChild(img);
                        resultCotainer.appendChild(description);
                    }
                }

            }

        });

};


export { randomBookController };