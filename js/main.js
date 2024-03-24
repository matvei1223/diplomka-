'use strict'
const tabs = document.querySelectorAll('.hschtopisati');
const tabContent = document.querySelectorAll('.tab-content');
const tabParent = document.querySelector('.hero-menu_header');

function hide(){
    tabContent.forEach(item =>{
        item.style.display = "none";
    })
    tabs.forEach(item =>{
        item.classList.remove('current');
    })
}

function show(i=0){
    tabContent[i].style.display = "block";
    tabs[i].classList.add('current');
}

hide();
show();

tabParent.addEventListener('click',(event)=>{
    if(event.target && event.target.classList.contains('hschtopisati')){
        tabs.forEach((item,i)=>{
            if(event.target == item){
                hide();
                show(i);
            }
        })
    }
});


//slidd
const slides = document.querySelectorAll('.slide'),
prev = document.querySelector('.ec-button-prev'),
next = document.querySelector('.ec-button-next');
console.log(slides);
let slideIndex = 1;

function showSlides(n){
    if(n>slides.length){
        slideIndex = 1;
    }
    if(n<1){
        slideIndex = slides.length;
    }
    slides.forEach(item=> item.style.display="none");
    slides[slideIndex-1].style.display ="block";

}
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex = slideIndex+n);
}
next.addEventListener('click',()=>{
    plusSlides(1)
})
prev.addEventListener('click',()=>{
    plusSlides(-1)
})

//sliderr
const slidestwo = document.querySelectorAll('.slide2'),
prev2 = document.querySelector('.tc-button-prev'),
next2 = document.querySelector('.tc-button-next');

let slideIndex2 = 1;

function showSlides1(n){
    if(n>slidestwo.length){
        slideIndex2 = 1;
    }
    if(n<1){
        slideIndex2 = slidestwo.length;
    }
    slidestwo.forEach(item=> item.style.display="none");
    slidestwo[slideIndex2-1].style.display="block";

   
}
showSlides1(slideIndex2);

function plusSlides1(n){
    showSlides1(slideIndex2 = slideIndex2+n);
}
next2.addEventListener('click',()=>{
    plusSlides1(1)
})
prev2.addEventListener('click',()=>{
    plusSlides1(-1)
})

//timer
const timeEnd = '2025-02-19'
function getTimeRemaining(endtime){
    const t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor(t/(1000*60*60*24)),
        hours = Math.floor((t/(1000*60*60)%24)),
        minuties = Math.floor(t/((1000*60)%60)),
        seconds = Math.floor((t/(1000)%60));
    return{
        'total':t,
        'days':days,
        'hours':hours,
        'minuties':minuties,
        'seconds':seconds
    }
}
function setClock(selector, endtime){
    const timer = document.querySelector(selector),
        days = document.querySelector('#days'),
        hours = document.querySelector('#hours'),
        minuties = document.querySelector('#minuties'),
        seconds = document.querySelector('#seconds');
        timeInterval = setInterval(updateClock, 1000);
    updateClock();
    function updateClock(){
        const t = getTimeRemaining(endtime);
        days.innerHTML = t.days;
        hours.innerHTML = t.hours;
        minuties.innerHTML = t.minuties;
        seconds.innerHTML = t.seconds;
        if(t.total<=0){
            days.innerHTML = '00';
            hours.innerHTML = '00';
            minuties.innerHTML = '00';
            seconds.innerHTML = '00';
        }
    }
}
setClock('.timer', timeEnd);


