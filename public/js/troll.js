
document.addEventListener('DOMContentLoaded', function() {
    const meow = Math.floor(Math.random() * 4);
    const audioContainer = document.getElementById('audio');

    if(meow === 1) {
        audioContainer.src = '/assets/audio/letmeknow.mp3';
        document.body.appendChild(audioContainer);
        audioContainer.play();
    }else if (meow === 2) {
        audioContainer.src = '/assets/audio/fettywap.mp3';
        document.body.appendChild(audioContainer);
        audioContainer.play();
    }else {
        console.log("[Ghost.Service] Luckyyyy")
    }
});
