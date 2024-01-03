document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carousel");
    const images = carousel.getElementsByTagName("img");

    let currentIndex = 0;

    setInterval(function () {
        images[currentIndex].style.display = "none";
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.display = "block";
    }, 3000);
});
