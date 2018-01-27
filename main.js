const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;

// set first img opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img=> img.addEventListener('click', imgClick));

function imgClick(e) {
    //reset all images opacity to 1
    imgs.forEach(img => img.style.opacity = 1);
    //change BIG image to clicked image 
    current.src = e.target.src;
    // add fade-in class
    current.classList.add('fade-in');
    // remove fade-in class after 0.5sec 
    setTimeout(() => {
        current.classList.remove('fade-in');
    }, 500);
    //change opacity to opacity var
    e.target.style.opacity = opacity;
}