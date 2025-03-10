// RESPONSIVE NAVBAR
const navLinks = document.querySelector(".nav-links");

function onToggleMenu(e) {
    e.name = e.name === "menu" ? "close" : "menu";
    navLinks.classList.toggle('top-[9%]');
}



// CAROUSEL
currentSlideID = 1;

sliderElement = document.getElementById("slider");
totalSlides = sliderElement.childElementCount;


function next() {
    if(currentSlideID < totalSlides) {
        currentSlideID++;
        showSlide();
    }
}

function prev() {
    if (currentSlideID > 1) {
        currentSlideID--;
        showSlide();
    }
}

function showSlide() {
    slides = document.getElementById("slider").getElementsByTagName("li");
    for (let index = 0; index < totalSlides; index++) {
        const element = slides[index];

        if (currentSlideID === index+1) {
            element.classList.remove("hidden");
        }
        else {
            element.classList.add("hidden");
        }
    }
}