
$(".click1").click(function(){
  $(".hide1").toggle(1000);
  $(".show1").toggle(1300);
});

$(".click2").click(function(){
  $(".hide2").toggle(500);
  $(".show2").toggle(1000);
});
$(".click3").click(function(){
  $(".hide3").toggle(500);
  $(".show3").toggle(1000);
});

function getname(){
  var user=document.getElementById("button").nodeValue;
  alert("Thank You");

event.preventDefault();
}