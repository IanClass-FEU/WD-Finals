document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("overlay");
    const overlayImg = document.getElementById("overlay-img");
    const galleryItems = document.querySelectorAll(".gallery-item");

    galleryItems.forEach(item => {
        item.addEventListener("click", function() {
            const imgSrc = this.querySelector("img").src;
            overlayImg.src = imgSrc;
            overlay.classList.add("visible");
        });
    });

    overlay.addEventListener("click", function() {
        overlay.classList.remove("visible");
    });
});
