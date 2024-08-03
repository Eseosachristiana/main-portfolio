const uilBars = document.querySelector(".uil-bars");

uilBars.addEventListener("click", function () {
    const menuBtn = document.getElementById("myNavMenu");
    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }

})

// typing effect
var typingEffect = new Typed(".animatedText", {
    strings: ["Programmer", "Tech Lover", "web developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
})


