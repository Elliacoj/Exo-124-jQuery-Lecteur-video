// FIXME Assurez vous que ces deux variables contiennent bien les bonnes choses ;-)
let player = $('.player__video')[0];
let progress = $('.progress__filled');
let buttonPlay = $('.toggle');
let volume = $("#volume");
let barProgresse = $("#playbackRate");

barProgresse.attr("max", player.duration);
player.volume = volume.val();

buttonPlay.click(function () {
    if(buttonPlay.text() === "►") {
        buttonPlay.text("||");
        player.play();
        barProgresse.val(player.currentTime / 100);
        timeUpDate();
    }

    else {
        buttonPlay.text("►");
        player.pause()
    }
});

function timeUpDate (){
    let time = setInterval(function () {
        progress.width((player.currentTime / player.duration * 100)+ "%");
        barProgresse.val(player.currentTime);

        if(player.currentTime === player.duration) {
            clearInterval(time);
        }
    }, 1);
}

barProgresse.on("change", function () {
    player.currentTime = barProgresse.val();
})

volume.on('change', function() {
    player.volume = volume.val();
});