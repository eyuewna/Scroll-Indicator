const scrollIndicator = document.getElementById('scroll-indicator');
const totalScrollHeight = document.body.scrollHeight - window.innerHeight;
const videoSource = document.getElementById('video-source');
const videoBackground = document.getElementById('video-background');
const audioPlayer = new Audio('../audio/goddess.mp3');

function updateScrollIndicator() {
    const scrollPercent = (window.scrollY / totalScrollHeight) * 100;
    scrollIndicator.style.width = `${scrollPercent}%`;
}

function resetVideo() {
    videoBackground.play();

    audioPlayer.play();
}

window.addEventListener('scroll', updateScrollIndicator);

const photocards = document.querySelectorAll('.photocard');

photocards.forEach(photocard => {
    photocard.addEventListener('click', resetVideo);
    photocard.addEventListener('mouseout', resetVideo);
});
