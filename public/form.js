// persistance
var allOurNames = []; // our little database EJS template engine?
// protractor front end tdd & selenium 
var refreshList = function () {
  $("#nameList").empty();
  allOurNames.forEach((name) => {
    $("#nameList").append("<li>" + name.name + " - birthday: " + name.birthday + "</li>");
  });
};
// callback passes the data we are trying to retrieve
// jquery.getjson
$(function () { // asynchronus .ready
  // asynchronous, only happens when it's ready, doesn't block work
  $.get("/names", function (data) {
    console.log(data);
    allOurNames = data;
    refreshList();
  });
  // asynchronus, only works when you do a click
  $('#formButton').click(function (e) {
    e.preventDefault();
    var newName = { 
      name: $('#name').val() ,
      birthday: $('#birthday').val()
    };
    allOurNames.push(newName);
    // talk to our server - jquery post docs
    $.post("/names", newName);
    refreshList();


    // clear input after submit
    $(this).parent('form').each(function () {
      this.reset();
    });
  });
});