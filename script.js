// const carouselSlide = document.querySelector('.carousel-slide');

// const carouselImages = document.querySelectorAll('.carousel-slide img');


// const prevBtn = document.querySelector('#prevBtn');

// const nextBtn = document.querySelector('#nextBtn');


// let counter = 1;
// const size = carouselImages[0].clientWidth;

// // carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// nextBtn.addEventListener('click',()=>{
//     if (counter >= carouselImages.length - 1) return;
//     console.log("next");
//     carouselSlide.style.transition = "transform 0.4s ease-in-out";
//     counter++;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// });

// prevBtn.addEventListener('click',()=>{
//     if (counter <= 0 ) return;
//     console.log("prev");
//     carouselSlide.style.transition = "transform 0.4s ease-in-out";
//     counter--;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    
// });

// carouselSlide.addEventListener('transitionend', ()=>{
//     if (carouselImages[counter].id === 'lastClone') {
//         carouselSlide.style.transition = 'none';
//         counter = carouselImages.length - 2;
//         carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     }
//     if (carouselImages[counter].id === 'firstClone') {
//         carouselSlide.style.transition = 'none';
//         counter = carouselImages.length - counter;
//         carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     }
// });



//auto slide


const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[0].clientWidth;
let slideInterval;

function slideNext() {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

function startSlideInterval() {
  slideInterval = setInterval(slideNext, 4000); // Adjust the interval (in milliseconds) as needed (e.g., 3000ms = 3 seconds)
}

function stopSlideInterval() {
  clearInterval(slideInterval);
}

nextBtn.addEventListener('click', () => {
  stopSlideInterval();
  slideNext();
  startSlideInterval();
});

prevBtn.addEventListener('click', () => {
  stopSlideInterval();
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  startSlideInterval();
});

carouselSlide.addEventListener('transitionend', () => {
  if (carouselImages[counter].id === 'lastClone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if (carouselImages[counter].id === 'firstClone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});

startSlideInterval(); // Start the automatic sliding when the page loads
