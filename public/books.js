//Using jquery's get method, grab some data using one of google's data apis, using the url https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699 . Use jquery or javascript to create an html div and put the book's title in inside the div. Use css to style the font size to be 20px.
var book = {
  title: '',
  author: [],
  img: ''
};

$(function(){
  $.get('https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699', function(data){
    book.title = data.items[0].volumeInfo.title;
    book.author = data.items[0].volumeInfo.authors;
    book.img = data.items[0].volumeInfo.imageLinks.thumbnail;
    document.getElementById('bookInfo').innerHTML = book.title;
  });
});

console.log(book);