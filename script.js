/*
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.slide-container');
    const pausePlayButton = document.querySelector('.pause-play-button');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    let slideIndex = 0;
    let isPaused = false;
    let intervalId;

    function showSlides() {
        if (slideIndex === 0) {
            container.style.transform = `translateX(0)`;
        } else if (slideIndex === 1) {
            container.style.transform = `translateX(-100%)`;
        } else if (slideIndex === 2) {
            container.style.transform = `translateX(-200%)`;
        }
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % 3;
        showSlides();
    }

    function prevSlide() {
        slideIndex = (slideIndex - 1 + 3) % 3;
        showSlides();
    }

    function togglePausePlay() {
        if (isPaused) {
            intervalId = setInterval(nextSlide, 3000);
            isPaused = false;
            pausePlayButton.textContent = '❚❚';
        } else {
            clearInterval(intervalId);
            isPaused = true;
            pausePlayButton.textContent = '▶';
        }
    }

    pausePlayButton.addEventListener('click', togglePausePlay);
    leftArrow.addEventListener('click', () => {
        if (!isPaused) return;
        prevSlide();
    });
    rightArrow.addEventListener('click', () => {
        if (!isPaused) return;
        nextSlide();
    });

    container.addEventListener('mouseenter', () => {
        clearInterval(intervalId);
    });

    container.addEventListener('mouseleave', () => {
        if (!isPaused) {
            intervalId = setInterval(nextSlide, 3000);
        }
    });

    intervalId = setInterval(nextSlide, 3000);
});
*/


document.addEventListener('DOMContentLoaded', function () {
    const showerButton = document.querySelector('.shower-button');
    const showerDuration = 60000; // 1 minute in milliseconds



    function createHeartOrFlower() {
        const isHeart = Math.random() < 0.5; // 50% chance of creating a heart
        const element = document.createElement('div');
        element.classList.add('flower');
        element.style.left = `${Math.random() * window.innerWidth}px`;
        element.innerHTML = isHeart ? '❤️' : '🌹'; // Use emojis for hearts and flowers
        document.body.appendChild(element);
    
        setTimeout(() => {
            element.remove();
        }, showerDuration);
    }
    

    function startShower() {
        const intervalId = setInterval(createHeartOrFlower, 100); // Generate every 100 milliseconds

        // Stop shower after 1 minute or page reload
        setTimeout(() => {
            clearInterval(intervalId);
        }, showerDuration);
    }

    showerButton.addEventListener('click', startShower);
});



document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.slide-container');
    const slides = document.querySelectorAll('.slide-item');
    let slideIndex = 0;
    let intervalId = null;

    function showSlides() {
        container.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    function startSlideshow() {
        intervalId = setInterval(() => {
            slideIndex = (slideIndex + 1) % slides.length;
            showSlides();
            if (slideIndex === slides.length - 1) {
                pauseSlideshow(); // Pause slideshow when last slide is reached
            }
        }, 3000); // Change slide every 3 seconds
    }

    function pauseSlideshow() {
        clearInterval(intervalId);
    }

    // Start slideshow on page load
    showSlides(); // Call this function initially to show the first image
    startSlideshow();

    // Pause slideshow on hover
    container.addEventListener('mouseenter', pauseSlideshow);
    container.addEventListener('mouseleave', startSlideshow);
});








        





