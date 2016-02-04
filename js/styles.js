$(function() {
  $(".clickable").click(function() {
    $("#Steinshow").slideToggle();
    $("#Steinhide").slideToggle();
  });
});

$(function() {
  $(".clickable2").click(function() {
    $("#faded").fadeOut();
    $("#notThere").fadeIn();
  });
});
