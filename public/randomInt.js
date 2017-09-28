//Write a javascript function that randomly returns an integer between 0 and 2. Using this return value and an html button, switch the background image between 3 images. 
var randomInt = function(min, max) {
  
  return Math.floor(Math.random() * ((max+1) - min)) + min;
};

var setBackground = function(num){
  if (num === 0) {
    return "https://d36tnp772eyphs.cloudfront.net/blogs/1/2015/04/milford-sound3-940x626.jpg";
  } else if ( num === 1) {
    return "https://d36tnp772eyphs.cloudfront.net/blogs/1/2015/04/mt-cook1-940x623.jpg"
  } else {
    return "https://d36tnp772eyphs.cloudfront.net/blogs/1/2015/04/milford-sound1-940x627.jpg"
  }
};

$(function() {
  $('body').css("background-image", "url(" + setBackground(randomInt(0, 2)) + ")");
});