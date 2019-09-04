
    
// document.getElementById("ps").onsubmit(function(){
//     yes =parseInt(document.querySelector('input[name="yes"]:checked').value);
    
    
    // document.getElementById("form1").onsubmit=function() {
    //     variable = parseInt(document.querySelector('input[name = "variable"]:checked').value);


    $(document).ready(function () {

        $("img#psil").click(function () {
            $(".psol").toggle(1000);
    
        });
        $("img#ssil").click(function () {
            $(".ssol").toggle(1000);
    
        });
    
        $("img#msil").click(function () {
            $(".msol").toggle(1000);
    
        });
    });