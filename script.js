$(".retry").hide();

$(".submit").click(function(){
    var food=$(".food").val();
    var times=$(".times").val();
    var age=$(".age").val();
    var total;
    total=times*age;
    $("p").hide();
    $("input").hide();
    $(".submit").hide();
    $("h1").text("You would have eaten " + total +" "+ food + " after 50 years.");
    $(".retry").show();
});

$(".retry").click(function(){
    var food=$(".food").val();
    var times=$(".times").val();
    var age=$(".age").val();
    var total;
     $("p").show();
     $("input").show();
     $(".submit").show();
     $(".retry").hide();
     $("h1").text("You would have eaten " - total +" "- food + " after 50 years.");
});

