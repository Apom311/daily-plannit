var currentDay = $('#currentDay');

var currentHour = (new Date()).getHours();
$('.description')
  .each(function(){
    var val = parseInt($(this).prop('id'));
    if(val > currentHour && val < currentHour + 12){
      $(this).addClass("future");
    }else if(val < currentHour && val > currentHour - 12){
      $(this).addClass("past");
    }else{
      $(this).addClass("present");
};})


function displayTime() {
  var rightNow = moment().format('LLLL');
  currentDay.text(rightNow);}

setInterval(displayTime, 1000);
console.log(currentHour);
console.log(currentDay);

var eightAm = $("#8a");
var nineAm = $("#9a");
var tenAm = $("#10a");
var elevenAm = $("#11a");
var twelvePm = $("#12p");
var onePm = $("#13p");
var twoPm = $("#14p");
var threePm = $("#15p");
var fourPm = $("#16p");
var fivePm = $("#17p");

function initPage() {

  var init8 = JSON.parse(localStorage.getItem("8:00 am"))
  eightAm.val(init8);

  var init9 = JSON.parse(localStorage.getItem("9:00 am"));
  nineAm.val(init9);

  var init10 = JSON.parse(localStorage.getItem("10:00 am"))
  tenAm.val(init10);
  
  var init11 = JSON.parse(localStorage.getItem("11:00 am"))
  elevenAm.val(init11);
  
  var init12 = JSON.parse(localStorage.getItem("12:00 pm"))
  twelvePm.val(init12);
  
  var init1 = JSON.parse(localStorage.getItem("1:00 pm"))
  onePm.val(init1);
  
  var init2 = JSON.parse(localStorage.getItem("2:00 pm"))
  twoPm.val(init2);
  
  var init3 = JSON.parse(localStorage.getItem("3:00 pm"))
  threePm.val(init3);
 
  var init4 = JSON.parse(localStorage.getItem("4:00 pm"))
  fourPm.val(init4);
  
  var init5 = JSON.parse(localStorage.getItem("5:00 pm"))
  fivePm.val(init5);

  return;
} 

var userInput;
var hourSpan;

$(document).ready(function(){
  //need to define variables by hour to storage target
  
  $(".saveBtn").on("click", function(){
    userInput = $(this).siblings(".description").val().trim();
    console.log(userInput);
    hourSpan = $(this).siblings(".input-group-prepend").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(userInput));
    console.log(userInput)
});})

console.log(userInput);

initPage();
