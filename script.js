/* =====================================
   SMOOTH SCROLL
===================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});



/* =====================================
   NAVBAR SHADOW ON SCROLL
===================================== */


const navbar =
document.querySelector("nav");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 40){

        navbar.style.boxShadow =
        "0 8px 25px rgba(15,23,42,.12)";

    }

    else{

        navbar.style.boxShadow =
        "none";

    }


});





/* =====================================
   ACTIVE NAVIGATION
===================================== */


const sections =
document.querySelectorAll("section");


const navLinks =
document.querySelectorAll(
"nav a"
);



window.addEventListener(
"scroll",
()=>{


let current="";


sections.forEach(section=>{


const top =
section.offsetTop - 120;


if(
scrollY >= top
){

current =
section.id;

}


});



navLinks.forEach(link=>{


link.classList.remove(
"active"
);



if(
link.getAttribute("href")
===
"#"+current
){

link.classList.add(
"active"
);

}



});


});







/* =====================================
   FADE IN ANIMATION
===================================== */


const revealItems =
document.querySelectorAll(
".card"
);



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add(
"show"
);


}



});


},
{

threshold:0.15

});



revealItems.forEach(item=>{


item.classList.add(
"hidden"
);


observer.observe(item);


});







/* =====================================
   HIGHLIGHT COUNTER
===================================== */


const counters =
document.querySelectorAll(
".counter"
);



counters.forEach(counter=>{


counter.innerText="0";



const updateCounter = ()=>{


const target =
+counter.dataset.target;


const current =
+counter.innerText;



const increment =
target / 80;



if(current < target){


counter.innerText =
Math.ceil(
current + increment
);


setTimeout(
updateCounter,
20
);


}

else{


counter.innerText =
target;


}



};



updateCounter();



});
