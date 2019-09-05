
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


