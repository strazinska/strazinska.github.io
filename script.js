document.addEventListener("DOMContentLoaded", function() {
    const cursor = document.querySelector('.cursor');
    
    if (cursor) {
        document.addEventListener('mousemove', e => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        });

        document.addEventListener('mousedown', () => cursor.classList.add('filled'));
        document.addEventListener('mouseup', () => cursor.classList.remove('filled'));
    }

    const hoverElements = document.querySelectorAll('a, button, .description-item img');

    hoverElements.forEach(el => {
        el.addEventListener('mouseover', () => cursor && cursor.classList.add('filled'));
        el.addEventListener('mouseout', () => cursor && cursor.classList.remove('filled'));
    });

// Modal logic
    const modal = document.getElementById("modal");
    const modalContent = document.querySelector(".modal-content");
    const modalText = document.getElementById("modal-text");

    const activeContents = [];

    document.querySelectorAll(".content").forEach(content => {
        content.addEventListener("click", function(event) {
            const info = this.getAttribute("data-info");
            modalText.textContent = info;

            modal.style.display = "block";
            document.body.style.overflow = "hidden"; 

            activeContents.forEach(activeContent => {
                activeContent.classList.remove('active');
            });

            this.classList.add('active');

            activeContents.push(this);
        });
    });

    document.addEventListener("click", function(event) {
        if (!modalContent.contains(event.target) && !event.target.closest(".content")) {
            modal.style.display = "none";
            document.body.style.overflow = ""; 

            activeContents.forEach(activeContent => {
                activeContent.classList.remove('active');
            });

            activeContents.length = 0;
        }
    });

// Typing effect
const headingText = "Vides Harmonijā...";
const headingElement = document.getElementById("animated-heading");

if (headingElement) {
    headingElement.innerHTML = headingText; // Show text instantly
}

// Animation code kept for later use
let index = 0;

function typeWriter() {
    if (headingElement && index < headingText.length) {
        headingElement.innerHTML += headingText.charAt(index);
        index++;
        setTimeout(typeWriter, 120); 
    } else if (headingElement) {
        headingElement.classList.add("typing");

        setTimeout(() => {
            headingElement.classList.add("slow-blink");
        }, 20); 
    }
}

});

// FILTERS
$(document).ready(function () {
    $('.project').addClass('show');

    $('.filterx').on('click', function () {
        var filterValue = $(this).attr('data-filter');

        // Remove 'active' from all buttons, then add to clicked one
        $('.filterx').removeClass('active');
        $(this).addClass('active');

        // Filter project items
        if (filterValue === 'all') {
            $('.project').addClass('show');
        } else {
            $('.project').removeClass('show');
            $('.' + filterValue).addClass('show');
        }

        if (typeof updateLayout === 'function') {
            updateLayout();
        }
    });

    if (typeof updateLayout === 'function') {
        updateLayout();
    }
});

// Touchscreen detection
if ('ontouchstart' in window || navigator.maxTouchPoints) {
    document.body.classList.add('no-cursor');
}

// Slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if(slides[slideIndex-1]){
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
    }
}

// Suggested projects slideshow
let suggestedSlideIndex = 0;

function plusSuggestedSlides(n) {
    suggestedSlideIndex += n;
    showSuggestedSlides(suggestedSlideIndex);
}

function showSuggestedSlides(n) {
    let i;
    let slides = document.querySelectorAll(".suggested-slide");
    if (n >= slides.length - 2) { suggestedSlideIndex = 0; }
    if (n < 0) { suggestedSlideIndex = slides.length - 3; }
    let offset = suggestedSlideIndex * -33.33;
    let slideshow = document.querySelector(".suggested-slideshow");
    if (slideshow) {
        slideshow.style.transform = `translateX(${offset}%)`;
    }
}

showSuggestedSlides(suggestedSlideIndex);

// Lightbox
var lightboxModal = document.getElementById("lightboxModal");
var modalImg = document.getElementById("lightboxImg");
var span = document.getElementsByClassName("lightbox-close")[0];

function openModal(imageSrc) {
    if(lightboxModal && modalImg){
        lightboxModal.style.display = "block";
        modalImg.src = imageSrc;
    }
}

if(span){
    span.onclick = function() {
        if(lightboxModal){
            lightboxModal.style.display = "none";
        }
    }
}

document.querySelectorAll('.description-item img').forEach(image => {
    image.addEventListener('click', function() {
        openModal(this.src);
    });
});

// Select the hamburger icon and the mobile navigation
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('nav.mobile-nav');

// Add event listener to the hamburger icon
hamburger.addEventListener('click', function() {
    // Toggle the 'active' class on the mobile navigation
    mobileNav.classList.toggle('active');
});

// video
document.addEventListener("DOMContentLoaded", function () {
    const videoSection = document.getElementById("videoSection");
    const scrollContent = document.getElementById("scrollContent");
  
    let lastScrollTop = 0;
    let isScrolling = false;
  
    window.addEventListener(
      "wheel",
      function (event) {
        const currentScroll = window.scrollY;
  
        // prevent repeated triggers
        if (isScrolling) return;
  
        if (event.deltaY > 0 && currentScroll < videoSection.offsetHeight) {
          // Scroll down
          isScrolling = true;
          scrollContent.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => (isScrolling = false), 1000);
        } else if (event.deltaY < 0 && currentScroll >= videoSection.offsetHeight) {
          // Scroll up
          isScrolling = true;
          videoSection.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => (isScrolling = false), 1000);
        }
      },
      { passive: false }
    );
  });
  