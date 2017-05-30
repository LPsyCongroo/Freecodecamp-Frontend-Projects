//*************OUR DATA****************************
var quotes = [
  {
    name:"Dr. Suess",
    quote:'"Don\'t cry because it\'s over, smile because it happened."'
  },
  {
    name:"Marilyn Monroe",
    quote:'"I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best."'
  },
  {
    name:"Oscar Wilde",
    quote:'"Be yourself; everyone else is already taken."'
  }
];
//*******************************

function refresh(){
  var index = Math.floor(Math.random() * quotes.length);
  $("#quote").html(quotes[index].quote);
  $("#name").html("- " + quotes[index].name); 
  console.log();
}

refresh(); //A random quote to start with

$("#refresh").click(refresh); //Our event handler

var link = "http://twitter.com/intent/tweet?text=" + $("#quote").html() + " " +  $("#name").html();
$("#twitter").attr("href", link);