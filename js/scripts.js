$(document).ready(function(){
    
$("button#physical").click(function(){
$("div.physicals").fadeOut();
$("div.socials").fadeIn();
});
$("button#social").click(function(){
    $("div.social").fadeOut();
    $("div.Mental").fadeIn();
    });
    $("button#mental").click(function(){
        $("div.Mental").fadeOut();
        $("div.emotional").fadeIn();
        });
        $("button#emotional").click(function(){
            $("div.emotional").fadeOut();
            $("div.buttons").fadeIn();
            });
            
});









