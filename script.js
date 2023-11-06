"use strict";




const services = document.querySelectorAll(".service");
services.forEach((box, i) =>
  box.insertAdjacentHTML(
    "afterbegin",
    `<img class="service_pics" src="img/service (${
      i + 1
    }).png" alt="Service pics"> 
    <div class="serv_detail"><p class="service_field"> Developement & IT </p>
    <h3> Web development, with HTML, <br> CSS, JavaScript and PHP </h3>
    <div class="service_feed-back">
    <img src="img/image 21.png" alt="Service Stars">
    <p>
    4.5
    <span>
    (2 Reviews)
    </span>
    </p>
    </div>
    <span class="serv_break--line"></span>
    <div class="developer_info">
    <div class="developer_s1">
    <img class="serv_developer" src="img/Ellipse 6.png" alt="Developer profile">
    <p>Martin Dias</p>
    </div>
    $29
    </div>
    </div>
    `
  )
);

const slides = document.querySelectorAll(".slide");
slides.forEach((slide) =>
  slide.insertAdjacentHTML(
    "afterbegin",
    `
    <img class="serv_developer" src="img/Ellipse 6.png" alt="Developer profile">
                <p class="free-lancer_name">
                    Martin Dias
                </p>
                <span class="job_title">
                    Web Designer
                </span>
                <div class="freelancer_star">
                    <img src="img/image 21.png" alt="Service Stars">
                    <p class="amount">
                        4.5
                        <span>
                            (2 Reviews)
                        </span>
                    </p>
                </div>
                <div class="freelancer_btn-container">
                <button class="freelancer-btn">Creative</button>
                <button class="freelancer-btn">Figma</button>
                </div>
            <span class="serv_break--line">  </span>
            <div class="freelancer_position">
                <div class="freelancer-location">
                    <p>
                        Location </br> <span class="value">London</span>
                    </p>
                </div>
                <div class="freelancer-rate">
                <p>
                    Rate </br> <span class="value">$25-$35/hr</span>
                </p>
                </div>
            </div>
            <div class="btn_container">
            <button class="freelanc_btn">View Profile &rarr;</button>
            </div>
`
  )
);
////////////////////////////////////////////////////////
//slider
slides.forEach((sl, i) => (sl.style.transform = `translateX(${i * 110}%)`));
const btnRight = document.querySelector(".arrow--right");
const btnLeft = document.querySelector(".arrow--left");
let curSlide = 0;
const maxSlide = slides.length;
btnRight.addEventListener("click", function () {
  //   curSlide--;
  console.log(curSlide);
  if (curSlide === 0) {
    curSlide = maxSlide - 4;
  } else {
    curSlide--;
  }
  slides.forEach(
    (sl, i) => (sl.style.transform = `translateX(${(i - curSlide) * 110}%)`)
  );
});
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

// categories.forEach(box => box.addEventListener('mouseover', function(e){
//     e.target
// }))






