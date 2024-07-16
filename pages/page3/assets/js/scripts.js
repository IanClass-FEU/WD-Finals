// Initialize variables
let currentIndex = 0;
const images = ["./assets/img/1.png", "./assets/img/2.png", "./assets/img/3.png"];
const texts = ["Resume", "Headers & Footers", "Features Page"];
const buttons = [
    { text: "Visit", link: "https://ianclass-feu.github.io/WD-Seatwork_2_tamayo/" },
    { text: "Visit", link: "https://ianclass-feu.github.io/WD-Seatwork-3/" },
    { text: "Visit", link: "https://ianclass-feu.github.io/WD-Seatwork-4/" }
];

// Preload images function
const preloadImages = () => {
    images.forEach((src) => {
        const img = new Image();
        img.src = src;
    });
};

// Function to change image and text
function changeImage(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    const sliderImage = document.getElementById("slider-image");
    sliderImage.style.opacity = 0;
    setTimeout(() => {
        sliderImage.src = images[currentIndex];
        document.getElementById("slider-text").innerText = texts[currentIndex];
        const sliderButton = document.getElementById("slider-button");
        sliderButton.innerText = buttons[currentIndex].text;
        // Assign click event dynamically
        sliderButton.onclick = function() {
            window.location.href = buttons[currentIndex].link;
        };
        sliderImage.style.opacity = 1;
    }, 500);
}

// Function to toggle dropdown menu
function toggleMenu() {
    const dropdownMenu = document.getElementById("dropdown-menu");
    const navIcon = document.querySelector(".nav-icon");
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    navIcon.classList.toggle("open");
}

// Event listener for document ready
document.addEventListener("DOMContentLoaded", function() {
    preloadImages(); // Preload images when the document is loaded

    // Initialize the initial button text and behavior
    const initialButton = document.getElementById("slider-button");
    initialButton.innerText = buttons[currentIndex].text;
    initialButton.onclick = function() {
        window.location.href = buttons[currentIndex].link;
    };
});
