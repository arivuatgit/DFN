$(function () {

});

function PlaybackVideo(fileName) {
    //  var srcUrl = "http://13.233.4.243/Videos/2019-12-17_23-04-29.mp4";
    var srcUrl = VideoUrl + fileName;//"http://13.126.136.46/Videos/" + fileName;
    videoElement.src = srcUrl;
    videoElement.load();
    videoElement.play();
    $("#divVideoPanel").mmsDialog("open");
}
function stopMedia() {
    videoElement.pause();
}