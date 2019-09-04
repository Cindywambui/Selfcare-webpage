$(document).ready(function() {
  $("#lilly").click(function() {
    $(".lilly-hidden").show();
    $(".lilly-image").show();
  });
  $("button#hide-lilly").click(function() {
    $(".lilly-hidden").hide();
    $(".lilly-image").hide();
  });
  $("#patrick").click(function() {
    $(".patrick-hidden").show();
    $(".patrick-image").show();
  });
  $("button#hide-patrick").click(function() {
    $(".patrick-hidden").hide();
    $(".patrick-image").hide();
  });
  $("#scarlet").click(function() {
    $(".scarlet-hidden").show();
    $(".scarlet-image").show();
  });
  $("button#hide-scarlet").click(function() {
    $(".scarlet-hidden").hide();
    $(".scarlet-image").hide();
  });
  $("#drew").click(function() {
    $(".drew-hidden").show();
    $(".drews-image").show();
  });
  $("button#hide-drew").click(function() {
    $(".drew-hidden").hide();
    $(".drews-image").hide();
  });
});
