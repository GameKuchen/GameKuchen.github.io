const form = document.getElementById('formi');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const fname = form.elements[0].value
    form.hidden = true
    if(fname === "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855") {
        document.getElementById('access-granted').hidden = false
        document.getElementById('Standard').hidden = true
    } else {
        document.getElementById('access-denied').hidden = false
        document.getElementById('Standard').hidden = true
        player.playVideo();
    }


})

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '500',
        width: '1000',
        videoId: 'dQw4w9WgXcQ',

    });
}
