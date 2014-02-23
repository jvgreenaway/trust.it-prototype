
$(document).ready(function() {
  $("#trust1-down").bind("click", function(event) {
    $("#trust1").hide();
    $("#trust3").show();
  });
  $("#trust2-up").bind("click", function(event) {
    $("#trust2").hide();
    $("#trust1").show();
  });
  $("#trust2-down").bind("click", function(event) {
    $("#trust2").hide();
    $("#trust3").show();
  });
  $("#trust3-up").bind("click", function(event) {
    $("#trust3").hide();
    $("#trust1").show();
  });
});

