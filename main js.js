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
    $("#girl").html("The Demon");
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
    $("#titletwoa").click(function(){
    $("#titletwoa").html("Gobble the kid up!");
    $("#titletwoa").css("font-size", "50px");
    $("body").css("background", "red");
    $("body").css("color", "white");
 });
    $("#cntitle").click(function(){
    $("#cntitle").html("虎姑婆: 台灣小說");
});
    $("#cnpyc").click(function(){
    $("#cnpyc").html("選擇你的人物");
});    
    $("#threehovertitle").hover(function(){
    $("#threehovertitle").animate({fontSize: '30px', opacity: '0.85', color: 'orange'}, 1000);
    }, function(){
    $("#threehovertitle").css("font-size", "15px");
    $("#threehovertitle").html("你去你弟弟的房間裡面但是沒有想到居然房間裡面有一個怪獸! 虎姑婆!");
});
    $("#threehovertitlea").hover(function(){
    $("#threehovertitlea").animate({fontSize: '30px', opacity: '0.85', color: 'orange'}, 1000);
    }, function(){
    $("#threehovertitlea").css("font-size", "15px");
    $("#threehovertitlea").html("你很餓所以偷偷的進去一個門開著的房子裡面! 床上有一位打呼很大聲的小男孩. 看起來很好吃!");
});
    $("#fourhovertitle").hover(function(){
    $("#fourhovertitle").animate({fontSize: '30px', opacity: '0.85', color: 'orange'}, 1000);
    }, function(){
    $("#fourhovertitle").css("font-size", "15px");
    $("#fourhovertitle").html("你躲起來但是好悲哀啊你看著你弟弟被怪獸吃掉了!");
});
    $("#fourhovertitlea").hover(function(){
    $("#fourhovertitlea").animate({fontSize: '30px', opacity: '0.85', color: 'orange'}, 1000);
    }, function(){
    $("#fourhovertitlea").css("font-size", "15px");
    $("#fourhovertitlea").html("你把弟弟吃掉了但是太小隻了你還很餓. 你看到了另一位小女孩. 你決定也把他也抓起來吃!");
});
    $("#fivehovertitle").hover(function(){
    $("#fivehovertitle").animate({fontSize: '30px', opacity: '0.85', color: 'orange'}, 1000);
    }, function(){
    $("#fivehovertitle").css("font-size", "15px");
    $("#fivehovertitle").html("你決定復仇你的弟弟! 你當個聰明的孩子決定騙怪獸.");
});
    $("#fivehovertitlea").hover(function(){
    $("#fivehovertitlea").animate({fontSize: '30px', opacity: '0.85', color: 'orange'}, 1000);
    }, function(){
    $("#fivehovertitlea").css("font-size", "15px");
    $("#fivehovertitlea").html("那個小妹妹居然比那個小男孩還難抓. 你放棄嗎? 還是繼續加油的抓那個小女孩來吃?");
});
    $("#cnah").hover(function(){
    $("#cnah").html("今晚就先這樣吧. 改天再抓看看那個小女孩");
});   
    $("#cni").hover(function(){
    $("#cni").html("我還沒吃飽!");
});   
    $("#sixhovertitle").hover(function(){
    $("#sixhovertitle").animate({fontSize: '30px', opacity: '0.85', color: 'orange'}, 1000);
    }, function(){
    $("#sixhovertitle").css("font-size", "15px");
    $("#sixhovertitle").html("為了復仇你的弟弟, 你想到了好主義. 你爬上了樹.");
});
    $("#sixhovertitlea").hover(function(){
    $("#sixhovertitlea").animate({fontSize: '30px', opacity: '0.85', color: 'orange'}, 1000);
    }, function(){
    $("#sixhovertitlea").css("font-size", "15px");
    $("#sixhovertitlea").html("你太累了睡著了. 但是你被小女孩的聲音叫醒了. 他說他會當個乖孩子跳進去你的嘴巴裡. ");
});
    $("#fivehovertitleb").hover(function(){
    $("#fivehovertitleb").animate({fontSize: '30px', opacity: '0.85', color: 'orange'}, 1000);
    }, function(){
    $("#fivehovertitleb").css("font-size", "15px");
    $("#fivehovertitleb").html("你至少吃到了小男孩. 雖然你很不高興沒有吃到小女孩但是你累了就睡著了.");
});
    $("#cnd").hover(function(){
    $("#cnd").html("你相信那個小女孩瑪?");
});
    $("#cny").hover(function(){
    $("#cny").html("還是你覺得他在騙你?");
});      
    $("#sixhovertitleb").hover(function(){
    $("#sixhovertitleb").animate({fontSize: '30px', opacity: '0.85', color: 'orange'}, 1000);
    }, function(){
    $("#sixhovertitleb").css("font-size", "15px");
    $("#sixhovertitleb").html("你覺得那個小女孩在騙你. 你終於抓到了他把他吃掉了. 嗯, 很好吃! 你滿足的回家了.");
});
    $("#sickshovertitle").hover(function(){
    $("#sickshovertitle").animate({fontSize: '30px', opacity: '0.85', color: 'orange'}, 1000);
    }, function(){
    $("#sickshovertitle").css("font-size", "15px");
    $("#sickshovertitle").html("你不相信你有多麼幸運. 那個小女孩叫你煮熱水. 他說他跳進去熱水煮完之後會比較好吃所以你幫他煮了一鍋水. 你閉上眼睛等著你好吃的一餐.");
});
    $("#cnho").hover(function(){
    $("#cnho").html("你的晚餐會多麼好吃呢?");
});      
    $("#eighthovertitle").hover(function(){
    $("#eighthovertitle").animate({fontSize: '30px', opacity: '0.85', color: 'orange'}, 1000);
    }, function(){
    $("#eighthovertitle").css("font-size", "15px");
    $("#eighthovertitle").html("你爬上了樹從樹上叫怪獸幫你煮一鍋水.");
});
    $("#sevenhovertitle").hover(function(){
    $("#sevenhovertitle").animate({fontSize: '30px', opacity: '0.85', color: 'orange'}, 1000);
    }, function(){
    $("#sevenhovertitle").css("font-size", "15px");
    $("#sevenhovertitle").html("你爬上了樹從樹上叫怪獸說你會跳進去他的嘴巴裡面.");
});
    $("#twelvehovertitle").hover(function(){
    $("#twelvehovertitle").animate({fontSize: '30px', opacity: '0.85', color: 'orange'}, 1000);
    }, function(){
    $("#twelvehovertitle").css("font-size", "15px");
    $("#twelvehovertitle").html("怪獸虎姑婆閉上了眼睛. 你把熱滾滾的水丟上虎姑婆!");
});
    $("#elevenhovertitle").hover(function(){
    $("#elevenhovertitle").animate({fontSize: '30px', opacity: '0.85', color: 'orange'}, 1000);
    }, function(){
    $("#elevenhovertitle").css("font-size", "15px");
    $("#elevenhovertitle").html("你叫怪獸虎姑婆閉上了眼睛. 接下來會怎麼樣?!");
});
    $("#yayhovertitle").hover(function(){
    $("#yayhovertitle").animate({fontSize: '30px', opacity: '0.85', color: 'orange'}, 1000);
    }, function(){
    $("#yayhovertitle").css("font-size", "15px");
    $("#yayhovertitle").html("恭喜!");
});
    $("#yayhov").hover(function(){
    $("#yayhov").animate({fontSize: '30px', opacity: '0.85', color: 'orange'}, 1000);
    }, function(){
    $("#yayhov").css("font-size", "15px");
    $("#yayhov").html("虎姑婆被熱滾滾的水燙死了! 你復仇了你的弟弟. 虎姑婆再也不吃掉小村裡的小孩了!");
});
    $("#nht").hover(function(){
    $("#nht").animate({fontSize: '30px', opacity: '0.85', color: 'orange'}, 1000);
    }, function(){
    $("#nht").css("font-size", "15px");
    $("#nht").html("你跟怪獸說如果煮熱水的話, 你會跳進去. 你跟他說煮起來比較好吃. 虎姑婆被你騙了!");
});
    $("#tht").hover(function(){
    $("#tht").animate({fontSize: '30px', opacity: '0.85', color: 'orange'}, 1000);
    }, function(){
    $("#tht").css("font-size", "15px");
    $("#tht").html("虎姑婆把水煮完後你叫他把水拉上來樹給你.");
});
    $("#fiht").hover(function(){
    $("#fiht").animate({fontSize: '30px', opacity: '0.85', color: 'orange'}, 1000);
    }, function(){
    $("#fiht").css("font-size", "15px");
    $("#fiht").html("你閉上眼睛但是突然感覺到全身燙燙的感覺! 你發現你被燙到了! 你慢慢的被燙死. 怎麼會這樣! 你居然被一位小女孩給騙了! 現在該你變成小村里人們的下一個大餐了.");
});
});

