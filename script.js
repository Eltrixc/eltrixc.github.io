/* =========================================
   AOS INITIALIZATION
========================================= */

AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

/* =========================================
   TYPING ANIMATION
========================================= */

const typingElement =
    document.getElementById("typing");

const texts = [

    "Research Intern at BRIN",

    "Computational Physics Enthusiast",

    "Scientific Computing",

    "Quantum Materials Research",

    "High Performance Computing",

    "Laboratory Assistant"

];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const current =
        texts[textIndex];

    if (!deleting) {

        typingElement.textContent =
            current.substring(
                0,
                charIndex + 1
            );

        charIndex++;

        if (charIndex === current.length) {

            deleting = true;

            setTimeout(
                typeEffect,
                1800
            );

            return;
        }

    } else {

        typingElement.textContent =
            current.substring(
                0,
                charIndex - 1
            );

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            textIndex =
                (textIndex + 1) %
                texts.length;
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 90
    );
}

typeEffect();

/* =========================================
   COUNTER ANIMATION
========================================= */

const counters =
    document.querySelectorAll(
        ".counter"
    );

const counterObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (
                    !entry.isIntersecting
                ) return;

                const counter =
                    entry.target;

                const target =
                    parseInt(
                        counter.dataset.target
                    );

                let current = 0;

                const increment =
                    Math.ceil(
                        target / 80
                    );

                const update = () => {

                    current += increment;

                    if (
                        current >= target
                    ) {

                        counter.textContent =
                            target;

                    } else {

                        counter.textContent =
                            current;

                        requestAnimationFrame(
                            update
                        );
                    }
                };

                update();

                counterObserver.unobserve(
                    counter
                );

            });

        },

        {
            threshold: 0.5
        }

    );

counters.forEach(counter => {

    counterObserver.observe(
        counter
    );

});

/* =========================================
   SPOTLIGHT FOLLOW MOUSE
========================================= */

const spotlight =
    document.getElementById(
        "spotlight"
    );

document.addEventListener(
    "mousemove",
    (e) => {

        spotlight.style.left =
            e.clientX + "px";

        spotlight.style.top =
            e.clientY + "px";
    }
);

/* =========================================
   ACTIVE NAV LINK
========================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        "nav a"
    );

window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(section => {

            const top =
                section.offsetTop;

            const height =
                section.offsetHeight;

            if (
                scrollY >=
                top - 200
            ) {

                current =
                    section.id;
            }
        });

        navLinks.forEach(link => {

            link.classList.remove(
                "active-link"
            );

            if (
                link.getAttribute(
                    "href"
                ) === "#" + current
            ) {

                link.classList.add(
                    "active-link"
                );
            }
        });
    }
);

/* =========================================
   NAVBAR EFFECT
========================================= */

const nav =
    document.querySelector(
        "nav"
    );

window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 50
        ) {

            nav.style.background =
                "rgba(0,0,0,.35)";

            nav.style.backdropFilter =
                "blur(20px)";

        } else {

            nav.style.background =
                "rgba(0,0,0,.15)";
        }
    }
);

/* =========================================
   HERO PARALLAX
========================================= */

const heroContent =
    document.querySelector(
        ".hero-content"
    );

window.addEventListener(
    "scroll",
    () => {

        const value =
            window.scrollY;

        heroContent.style.transform =
            `translateY(${value * 0.12}px)`;
    }
);

/* =========================================
   FLOATING CARD EFFECT
========================================= */

const cards =
    document.querySelectorAll(

        ".glass-card, \
         .skill-card, \
         .interest-card, \
         .stat-card"

    );

cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        (e) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX -
                rect.left;

            const y =
                e.clientY -
                rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateY =
                (x - centerX) / 20;

            const rotateX =
                (centerY - y) / 20;

            card.style.transform =

                `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-6px)
                `;
        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =

                `
                perspective(1000px)
                rotateX(0deg)
                rotateY(0deg)
                translateY(0)
                `;
        }
    );
});

/* =========================================
   HERO FADE
========================================= */

const hero =
    document.querySelector(
        ".hero"
    );

window.addEventListener(
    "scroll",
    () => {

        const opacity =
            1 -
            window.scrollY / 700;

        hero.style.opacity =
            Math.max(
                opacity,
                0.25
            );
    }
);

/* =========================================
   SCROLL REVEAL FOR TIMELINE
========================================= */

const timelineItems =
    document.querySelectorAll(
        ".timeline-item"
    );

const timelineObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "show"
                    );
                }
            });

        },

        {
            threshold: 0.2
        }

    );

timelineItems.forEach(item => {

    timelineObserver.observe(
        item
    );

});

/* =========================================
   SMOOTH SCROLL
========================================= */

document
.querySelectorAll(
    'a[href^="#"]'
)

.forEach(anchor => {

    anchor.addEventListener(
        "click",
        function(e) {

            e.preventDefault();

            const target =
                document.querySelector(
                    this.getAttribute(
                        "href"
                    )
                );

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });
            }
        }
    );

});

/* =========================================
   CONSOLE SIGNATURE
========================================= */

console.log(`
=====================================

RIZKY SETYAWAN
Research Portfolio

Physics Undergraduate
Research Intern at BRIN

Computational Physics
Scientific Computing
Quantum Materials

=====================================
`);
