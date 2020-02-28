(() => {
// variables at the top -> elements on the page we need to work with
let sigilButtons = document.querySelectorAll('.sigilContainer'),
lightbox = document.querySelector('.lightbox'),
gotVideo = lightbox.querySelector('video'),
closeLightbox = lightbox.querySelector('.lightbox-close');

// events go in the middle 
function showLightbox() {
// pop open a lightbox here and show some content
// start with a video
// debugger;

lightbox.classList.add('show-lightbox');

gotVideo.play();
}

function hideLightbox() {
    lightbox.classList.remove('show-lightbox');

    gotVideo.pause();
    gotVideo.currentTime = 0;
}

//add a click evevnt to the sigilButtons
sigilButtons.forEach(button => button.addEventListener('click', showLightbox))

// add an event handler for the lightbox close button
closeLightbox.addEventListener('click', hideLightbox);

})();