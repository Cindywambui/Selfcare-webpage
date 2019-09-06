$(document).ready(function () {
    $("#quote2").mouseenter(function () {
        $("#quote2content").fadeIn();
    }).mouseleave(function () {
        $("#quote2content").fadeOut();
    })
    $("#quote3").mouseenter(function () {
        $("#quote3content").fadeIn();
    }).mouseleave(function () {
        $("#quote3content").fadeOut();
    })
    $("#quote4").mouseenter(function () {
        $("#quote4content").fadeIn();
    }).mouseleave(function () {
        $("#quote4content").fadeOut();
    })
    $("#quote6").mouseenter(function () {
        $(".quote6content").fadeIn();
    }).mouseleave(function () {
        $(".quote6content").fadeOut();
    })
    $("#quote7").mouseenter(function () {
        $(".quote7content").fadeIn();
    }).mouseleave(function () {
        $(".quote7content").fadeOut();
    })
    $("#quote8").mouseenter(function () {
        $(".quote8content").fadeIn();
    }).mouseleave(function () {
        $(".quote8content").fadeOut();
    })
    $("#quote10").mouseenter(function () {
        $("#quote10content").fadeIn();
    }).mouseleave(function () {
        $("#quote10content").fadeOut();
    })
    $("#quote11").mouseenter(function () {
        $("#quote11content").fadeIn();
    }).mouseleave(function () {
        $("#quote11content").fadeOut();
    })
    $("#quote12").mouseenter(function () {
        $("#quote12content").fadeIn();
    }).mouseleave(function () {
        $("#quote12content").fadeOut();
    })
    $("#quote14").mouseenter(function () {
        $("#quote14content").fadeIn();
    }).mouseleave(function () {
        $("#quote14content").fadeOut();
    })
    $("#quote15").mouseenter(function () {
        $("#quote15content").fadeIn();
    }).mouseleave(function () {
        $("#quote15content").fadeOut();
    })
    $("#quote16").mouseenter(function () {
        $("#quote16content").fadeIn();
    }).mouseleave(function () {
        $("#quote16content").fadeOut();
    })
    $("#physicalcontenttitle").click(function () {
        $("#physicalcontenttext").toggle();
    })
    $("#mentalcontenttitle").click(function () {
        $("#mentalcontenttext").toggle();
    })
    $("#socialcontenttitle").click(function () {
        $("#socialcontenttext").toggle();
    })
    $("#emotionalcontenttitle").click(function () {
        $("#emotionalcontenttext").toggle();
    })
});
function myFunction(dropDown) {
  dropDown.classList.toggle("change");
  document.getElementById("myDropdown").classList.toggle("show");
}

class FitnessCheck {

    constructor() {
        this.fitnessPerc = 0;
        this.totalFitnessPoints = 0;
        this.physicalStatusPoints = 0;
        this.socialStatusPoints = 0;
        this.mentalStatusPoints = 0;
        this.emotionalStatusPoints = 0;

    }


    /**
    * Gets the hydration, sleep, health and breath points
    * from the radio inputs the user gave and sums their values
    * to give the total physical status points
    *
    * @returns {totalPhysicalStatusPoints}
    */
    getPhysicalStatusPoints() {
        var hydrationPoints = parseInt($("input[name=hydration]:checked").val());
        var sleepPoints = parseInt($("input[name=sleep]:checked").val());
        var healthPoints = parseInt($("input[name=health]:checked").val());
        var breathPoints = parseInt($("input[name=breaths]:checked").val());


        var totalPhysicalStatusPoints = hydrationPoints + sleepPoints + healthPoints + breathPoints;

        // console.log(totalPhysicalStatusPoints);

        this.physicalStatusPoints = totalPhysicalStatusPoints

        return totalPhysicalStatusPoints


    }

    /**
    * Gets the self-care, family, time, talking and happy points
    * from the radio inputs the user gave and sums their values
    * to give the total social status points.
    *
    * @returns {totalSocialStatusPoints}
    */
    getSocialStatusPoints() {
        var selfPoints = parseInt($("input[name=yourself]:checked").val());
        var familyPoints = parseInt($("input[name=family]:checked").val());
        var timePoints = parseInt($("input[name=time]:checked").val());
        var talkPoints = parseInt($("input[name=talk]:checked").val());
        // var happyPoints = parseInt($("input[name=happy]:checked").val());


        var totalSocialStatusPoints = selfPoints + familyPoints + timePoints + talkPoints;


        // console.log(totalSocialStatusPoints);

        this.socialStatusPoints = totalSocialStatusPoints

        return totalSocialStatusPoints

    }

// go out with friends ,make time for relatives
    /**
    * Gets the trust, lonely, mood, thought and struggle points
    * from the radio inputs the user gave and sums their values
    * to give the total mental status points.
    *
    * @returns {totalMentalStatusPoints}
    */
    getMentalStatusPoints() {
        var trustPoints = parseInt($("input[name=trust]:checked").val());
        var lonelyPoints = parseInt($("input[name=lonely]:checked").val());
        var moodPoints = parseInt($("input[name=mood]:checked").val());
        // var thoughtPoints = parseInt($("input[name=think]:checked").val());
        var strugglePoints = parseInt($("input[name=struggle]:checked").val());


        var totalMentalStatusPoints = trustPoints + lonelyPoints + moodPoints + strugglePoints;

        // console.log(totalMentalStatusPoints);

        this.mentalStatusPoints = totalMentalStatusPoints

        return totalMentalStatusPoints
// meditate ,be in hcurch, speak to people
    }


    /**
    * Gets the emotional-status, loss, relationship and overall-health points
    * from the radio inputs the user gave and sums their values
    * to give the total emotional status points.
    *
    * @returns {totalEmotionalStatusPoints}
    */
    getEmotionalStatusPoints() {
        var emotionalStatusPoints = parseInt($("input[name=emotional-status]:checked").val());
        var lossPoints = parseInt($("input[name=loss]:checked").val());
        var relationshipPoints = parseInt($("input[name=relationship]:checked").val());
        var overallHealthPoints = parseInt($("input[name=overall-health]:checked").val());


        var totalEmotionalStatusPoints = emotionalStatusPoints + lossPoints + relationshipPoints + overallHealthPoints;

        // console.log(totalEmotionalStatusPoints);

        this.emotionalStatusPoints = totalEmotionalStatusPoints

        return totalEmotionalStatusPoints
    }
// go out meet firneds ,create more relationships

    /**
    * Sums the physicalStatusPoints, socialStatusPoints, emotionalStatusPoints
    *  and mentalStatusPoints to give the totalFitnessPoints
    *
    * @returns {totalFitnessStatusPoints}
    */
    calculateTotalFitnessPoints() {

        this.totalFitnessPoints = this.physicalStatusPoints + this.socialStatusPoints + this.emotionalStatusPoints + this.mentalStatusPoints


        console.log(this.totalFitnessPoints)

        return this.totalFitnessPoints
    }

    /**
    * Calculates fitness percantage
    * @param {number} fitnessCategoryPoints - The fitness category points.
    * @param {number} maxPoints - The max points for a category.
    * @returns {fitnessCategoryPerc} - The fitness category percentage
    */
    calculatelFitnessPerc(fitnessCategoryPoints, maxPoints) {

        var fitnessCategoryPerc = fitnessCategoryPoints / maxPoints * 100

        return fitnessCategoryPerc
    }



    populateFitnessReport() {

        var overallFitnessPerc = Math.round(this.calculatelFitnessPerc(this.totalFitnessPoints, 80));
        var physicalFitnessPerc = Math.round(this.calculatelFitnessPerc(this.physicalStatusPoints, 20))
        var emotionalFitnessPerc = Math.round(this.calculatelFitnessPerc(this.emotionalStatusPoints, 20))
        var mentalFitnessPerc = Math.round(this.calculatelFitnessPerc(this.mentalStatusPoints, 20))
        var socialFitnessPerc = Math.round(this.calculatelFitnessPerc(this.socialStatusPoints, 20));

        $('#overall_fit').html(overallFitnessPerc + '%')
        $('#social_fit').html(socialFitnessPerc + '%')
        $('#mental_fit').html(mentalFitnessPerc + '%')
        $('#phyc_fit').html(physicalFitnessPerc + '%')
        $('#emot_fit').html(emotionalFitnessPerc + '%')
        if (overallFitnessPerc <= 50 || physicalFitnessPerc < 50 || socialFitnessPerc < 50 || mentalFitnessPerc < 50 || emotionalFitnessPerc < 50) {
          $("p#advice").text("In the sections that you scored less than 50%, read the relevant advice!: ");
          $("p#physical-advice").text("Physical selfcare: ")
          $("ul#physical-list").text(`Go for regular walks, sleep for at least 6 hours, stay hydrated, WORKOUT!!`);
          $("p#emotional-advice").text("Emotional selfcare: ")
          $("ul#emotional-list").text("See a professional such as a therapist, Write in a journal, Create art, Listen to calming happy music");
          $("p#social-advice").text("Social selfcare: ")
          $("ul#social-list").text("Go spend more time with family and friends!!");
          $("p#mental-advice").text("Mental selfcare: ")
          $("ul#mental-list").text("Stimulate your mind: Read a book, Solve puzzles, Play boardgames. Seek professional help and confirmation if you suspect any mental illness.");
        } else {
            $("p#advice").text("You are above average in every section so you are doing relatively well, but there is always room to improve! Keep checking on yourself and check our quote section!");
        }



}
}


var fitness_check = new FitnessCheck();


$(document).ready(function () {


    $("button.physical.next").click(function () {
        fitness_check.getPhysicalStatusPoints();
        $("div.physicals").fadeOut(1);
        $("div.social").fadeIn(1);
    });
    $("button.socials.back").click(function () {
        $("div.social").fadeOut(1);
        $("div.physicals").fadeIn(1);
    });

    $("button.socials.next").click(function () {
        fitness_check.getSocialStatusPoints()
        $("div.social").fadeOut(1);
        $("div.mental").fadeIn(1);
    });
    $("button.mentals.back").click(function () {
        fitness_check.getMentalStatusPoints()
        $("div.mental").fadeOut(1);
        $("div.social").fadeIn(1);
    });


    $("button.mentals.next").click(function () {
        fitness_check.getMentalStatusPoints()
        $("div.mental").fadeOut(1);
        $("div.emotional").fadeIn(1);
    });
    $("button.emotionals.back").click(function () {
        $("div.emotional").fadeOut(1);
        $("div.mental").fadeIn(1);
    });

    $("button.emotionals.submit").click(function () {
        fitness_check.getEmotionalStatusPoints()
        fitness_check.calculateTotalFitnessPoints();
        fitness_check.populateFitnessReport();
    });


});






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

$(document).ready(function() {
 $("#submit").click (function(event) {
   console.log("working")
   event.preventDefault();
   var name=document.getElementById("name").value;
   var email=document.getElementById("email").value;
   var text=document.getElementById("text").value;
   // form validation
   if (name == ""){
     alert("Please enter your name");
     return false;
   }else if(email == ""){
     alert("Please enter your email")
     return false;
   }else if(text == ""){
     alert("Please give a feedback")
     return false;
   }else {
     alert(name + " your message is received. Thank you");
   }
   document.getElementById("form1").reset();
 });
});
