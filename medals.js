var svg = document.getElementById("svg");
var title = document.getElementById("title");
var switch_btn = document.getElementById("switch");
var US_medal_count = [9, 8, 6];
var Canada_medal_count = [11, 8, 10];
var data = US_medal_count;

var set = function(){
  var circles = d3.selectAll("circle");
  circles.data(data);
  circles.attr("r", function(d){return 11 * d});
}

var switch_button = function(e){
  if (data == US_medal_count){
    title.innerHTML = "CANADA";
    data = Canada_medal_count;
  }
  else if (data == Canada_medal_count){
    title.innerHTML = "US";
    data = US_medal_count;
  }
  set();
}

switch_btn.addEventListener("click", switch_button);
