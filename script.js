const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark-mode");

    const icon = themeBtn.querySelector("i");

    if(document.body.classList.contains("dark-mode")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }

    else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});
// Typing Animation

const typingText = document.querySelector(".typing");

const words = [
    "Frontend Developer",
    "Java Learner",
    "Tech Enthusiast",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!isDeleting){

        typingText.textContent = currentWord.substring(0, charIndex + 1);

        charIndex++;

        if(charIndex === currentWord.length){

            isDeleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    }

    else{

        typingText.textContent = currentWord.substring(0, charIndex - 1);

        charIndex--;

        if(charIndex === 0){

            isDeleting = false;

            wordIndex++;

            if(wordIndex === words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);

}

typeEffect();
// Scroll Reveal Animation

const sections = document.querySelectorAll(
".about, .skills, .education, .projects, .contact"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

sections.forEach((section)=>{

    section.classList.add("hidden");

    observer.observe(section);

});
// Active Navbar

const navLinks = document.querySelectorAll(".nav-links a");

const allSections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    allSections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});