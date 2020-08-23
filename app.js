var link1 = document.getElementById("l1");
var chosen = document.querySelector(".chosen");
var item1 = document.getElementById("item-1");
var item2 = document.getElementById("item-2");
var item3 = document.getElementById("item-3");
link1.addEventListener("click", function() {
    chosen.style.transform = "translate(0, 0)";
    item1.style.transform = `translateX(0)`;
    item2.style.transform = `translateX(1346px)`;
    item3.style.transform = `translateX(2692px)`;
});
var link2 = document.getElementById("l2");
link2.addEventListener("click", function(){
    chosen.style.transform = "translate(224px, 0)";
    item1.style.transform = `translateX(-1346px)`;
    item2.style.transform = `translateX(-1346px)`;
    item3.style.transform = `translateX(0)`;
});
var link3 = document.getElementById("l3");
link3.addEventListener("click", function(){
    chosen.style.transform = "translateX(413px)";
    item1.style.transform = `translateX(-2692px)`;
    item2.style.transform = `translateX(-2692px)`;
    item3.style.transform = `translateX(-2692px)`;
});

const nav = document.querySelector("nav");
const overlay = document.querySelector(".overlay");

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function() {
    overlay.classList.toggle("overlayToggle");
    nav.classList.toggle("navToggle");
})



var answer1 = document.querySelector(".answer-1");
var arrow1 = document.querySelector(".arrow-1");
var answer2 = document.querySelector(".answer-2");
var arrow2 = document.querySelector(".arrow-2");
var answer3 = document.querySelector(".answer-3");
var arrow3 = document.querySelector(".arrow-3");
var answer4 = document.querySelector(".answer-4");
var arrow4 = document.querySelector(".arrow-4");


arrow1.addEventListener("click", function(){
    answer1.classList.toggle("helper-display");
    arrow1.classList.toggle("helper-rotate");
});

arrow2.addEventListener("click", function(){
    answer2.classList.toggle("helper-display");
    arrow2.classList.toggle("helper-rotate");
});

arrow3.addEventListener("click", function(){
    answer3.classList.toggle("helper-display");
    arrow3.classList.toggle("helper-rotate");
});

arrow4.addEventListener("click", function(){
    answer4.classList.toggle("helper-display");
    arrow4.classList.toggle("helper-rotate");
});
