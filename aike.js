


function ClickVideo() {
    var $ifd = $("iframe").contents().find("iframe").contents();
    $ifd.find("div").filter(".video-click-to-play-link").click();
}
function BanVol() {
    var $ifd = $("iframe").contents().find("iframe").contents();
    $ifd.find("div").filter(".volume-wrapper").children().eq(0).click();
}
function ChangeRate() {
    var $ifd = $("iframe").contents().find("iframe").contents();
    $ifd.find("select").val(1.5).change();
   $ifd.find("select").val(2).change();


}
function play(){

    ClickVideo();//打开视频
        BanVol();
     ChangeRate();
    //2倍速
    var test2 = setInterval(function(){
        var $ifd = $("iframe").contents().find("iframe").contents();
        $ifd.find("div").filter(".play-progress").css("width");
        var jindu = $ifd.find("div").filter(".play-progress").css("width");

        if (jindu == "100%") {
            var ihref = document.getElementById("next-activity-link").href;
    window.location.href = ihref;//视频播放结束则点击下一个
        }
    },1000)
}


function isEnd() {
    var $ifd = $("iframe").contents().find("iframe").contents();
    $ifd.find("div").filter(".play-progress").css("width") == "100%"
    var jindu = $ifd.find("div").filter(".play-progress").css("width")


    if (jindu == "100%") {


        nextPlay();//视频播放结束则点击下一个
    }


}

function nextPlay() {
    var ihref = document.getElementById("next-activity-link").href;
    window.location.href = ihref;
}

function clickinput() {
    while($("input.btn-primary")) {
            $("input.btn-primary").click();
            break;
    }
}
//function ish() {
  //  if($("iframe")){
   //     if($("iframe").contents().find("iframe")){
 //           setInterval('play();',5000);

  //      }
  //  }
//}

clickinput();


var test1 = setTimeout(function(){

    play();

    //your codes
},5000);

