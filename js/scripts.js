$(document).ready(function() {
  $("h1").click(function() {
    $("p").slideToggle();
    $("img").slideToggle();

  });
  $("button#lightblue").click(function() {
    $("#box").removeClass();
    $("#box").addClass("lightblue-background");
  });
  $("button#lightgreen").click(function() {
    $("#box").removeClass();
    $("#box").addClass("lightgreen-background");
  });
});
