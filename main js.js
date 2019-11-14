$(document).ready(function() {
  // console.log("page has loaded!");
  // var object = $("#h1");
  // object=$("#h2");
  // object = $("#girl");
  // object = $("#showGirl");

  // $("#h1").html("虎姑婆: 台灣傳統故事 Aunt Tigress: A Taiwanese Folk Tale");

  // $("body").css("background", "blue");

  // $("#h1").hover(function(){
	 // $("#h1").animate({"font-size": '50px', opacity: '0.5', color: 'yellow'}, 1000);
  // 	}, function(){
  // 		$("#h1").css("font-size", "15px");
  // });

  // $("#showGirl").click(function(){
  //   $("#girl").show();
  // });

  // console.log(object);

  $("#girl").hover(function () {
    $("#girl").attr("src", "figure2.jpg");
    $("body").css("background", "red");
    $("body").css("color", "white");
  }, function(){
    $("#girl").attr("src", "figure1.jpg");
    $("body").css("background", "white");
    $("body").css("color", "black");
}); 

  $("#titletwo").click(function(){
    $("#titletwo").html("Go and hide!");
    $("#titletwo").css("font-size", "50px");
    $("body").css("background", "red");
 });

   $("#setting").hover(function() {
      $("#setting").attr("src", "figure1.jpg");
      $("body").css("background", "red");
      $("body").css("color", "white");
    }, function(){
      $("#setting").attr("src", "44017081.jpg");
      $("body").css("background", "white");
      $("body").css("color", "black");
});  

   $("#titlethree").click(function(){
    $("#titlethree").html("Plan for revenge");
    $("#titlethree").css("font-size", "50px");
    $("body").css("background", "red");
});

  $("#threehovertitle").hover(function(){
    $("#threehovertitle").animate({fontSize: '30px', opacity: '0.85', color: 'orange'}, 1000);
    }, function(){
      $("#threehovertitle").css("font-size", "15px");
});

     $("#settingTwo").hover(function() {
      $("#settingTwo").attr("src", "6914424567_1d81ecd382_c.jpg");
      $("body").css("background", "red");
      $("body").css("color", "white");
    }, function(){
      $("#settingTwo").attr("src", "44017081.jpg");
      $("body").css("background", "white");
      $("body").css("color", "black");
});  

     $("#settingThree").hover(function() {
      $("body").css("background", "orange");
      $("body").css("color", "white");
    }, function(){
      $("#settingThree").attr("src", "questionmark.png");
      $("body").css("background", "white");
      $("body").css("color", "black");
});       
    $("#titlefour").click(function(){
    $("#titlefour").html("See how well you fare in tricking the demon!");
    $("#titlefour").css("font-size", "50px");
    $("body").css("background", "red");
    $("body").css("color", "white");
});
    $("#titlefive").click(function(){
    $("#titlefive").html("What is the next step in your brilliant plan?");
    $("#titlefive").css("font-size", "50px");
    $("body").css("background", "red");
    $("body").css("color", "white");
});
    $("#titlesix").click(function(){
    $("#titlesix").html("Was it the right choice? Find out!");
    $("#titlesix").css("font-size", "50px");
    $("body").css("background", "red");
    $("body").css("color", "white");
});
    $("#titleseven").click(function(){
    $("#titleseven").html("Did confidence get the better of you? Find out!");
    $("#titlesven").css("font-size", "50px");
    $("body").css("background", "red");
    $("body").css("color", "white");
});
    $("#titleeight").click(function(){
    $("#titleeight").html("What happens next!?");
    $("#titleeight").css("font-size", "50px");
    $("body").css("background", "red");
    $("body").css("color", "white");
});
    $("#titlenine").click(function(){
    $("#titlenine").html("Do you become stew or does the demon? Find out!");
    $("#titlenine").css("font-size", "50px");
    $("body").css("background", "red");
    $("body").css("color", "white");
});
    $("#titleten").click(function(){
    $("#titleten").html("Will you finally outsmart the demon? Find out!");
    $("#titleten").css("font-size", "50px");
    $("body").css("background", "red");
    $("body").css("color", "white");
});
    $("#titleeleven").click(function(){
    $("#titleeleven").html("Did you deal the final blow? Find out!");
    $("#titleeleven").css("font-size", "50px");
    $("body").css("background", "red");
    $("body").css("color", "white");
});
   $("#titletwelve").click(function(){
    $("#titletwelve").css("font-size", "150px");
    $("body").css("background", "red");
    $("body").css("color", "white");
});
});

