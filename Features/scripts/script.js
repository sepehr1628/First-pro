"use strict";
const btnRight = document.querySelector(".arrow--right");
const btnLeft = document.querySelector(".arrow--left");
const slides = document.querySelectorAll(".slide");
const maxSlide = slides.length;
let curSlide = 0;

  
///////////////////////////////////////////////////////
//slider
slides.forEach((sl, i) => (sl.style.transform = `translateX(${i * 110}%)`));

// Right arrow button
btnRight.addEventListener("click", function () {
  //   curSlide--;
  if (curSlide === 0) {
    curSlide = maxSlide - 4;
  } else {
    curSlide--;
  }
  slides.forEach(
    (sl, i) => (sl.style.transform = `translateX(${(i - curSlide) * 110}%)`)
  );
});

// Left arrow button
btnLeft.addEventListener("click", function () {
  if (curSlide === maxSlide - 4) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  slides.forEach(
    (sl, i) => (sl.style.transform = `translateX(${(i - curSlide) * 110}%)`)
  );
  console.log(curSlide);
});
