function resetFields() {
  document.getElementById('testimonial-post').reset();
}


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


  $(".clickable").click(function() {
    $("form#testimonial-post").show();
  });
  $("form#testimonial-post").submit(function(event) {
    event.preventDefault();
    var usersName = $("input#users-name").val();
    var userText = $("textarea#post").val();

    if (usersName == null || usersName == "") {
      alert('Kindly input your name in the name field')
    } else if (userText == null || userText == "") {
      alert('Kindly write some text if you want to post a testimonial');
    } else {
      $("#users-posts").append('<div class="row">' +
                                  '<div class="col-md-3">' +
                                  '</div>' +
                                  '<div class="col-md-6">' +
                                    '<div class="card">' +
                                      '<h3 class="card-title testimonials new-titles">' + usersName + '</h3>' +
                                      '<div class="hidden">' +
                                        '<p class="card-body">' + userText + '</p>' +
                                        '<p class="card-footer"><button type="button" class="btn btn-warning hide-testimonial" name="button">Hide this testimonial content</button></p>' +
                                      '</div>' +
                                    '</div>' +
                                  '</div>' +
                                  '<div class="col-md-3">' +
                                  '</div>' +
                                '</div><br><br>');
      $(".new-titles").click(function() {
        $(this).siblings(".hidden").show();
      });
      $(".hide-testimonial").click(function() {
        $(this).parents().find(".hidden").hide();
      });
      resetFields();
      $("form#testimonial-post").hide();
    };
  });
});
