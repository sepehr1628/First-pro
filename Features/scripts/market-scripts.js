"use strict";

// Variable Definitions
const addToCartBtn = document.querySelectorAll(".product_grid--item-addToCart");
const products = document.querySelector(".product-count");


addToCartBtn.forEach((btn) =>
  btn.addEventListener("click", function () {
    if (btn.dataset.click === "0") {
      btn.dataset.click = "1";
      btn.classList.add("product_grid--item-addClicked");
      btn.innerHTML = "Already Added!";
      if (products.innerHTML === "0") products.style.opacity = "1";
      products.innerHTML++;
    } else if (btn.dataset.click === "1") {
      btn.dataset.click = "0";
      btn.classList.remove("product_grid--item-addClicked");
      btn.innerHTML = "Add To Cart";
      products.innerHTML--;
      if (products.innerHTML === "0") products.style.opacity = "0";
    }
  })
);
