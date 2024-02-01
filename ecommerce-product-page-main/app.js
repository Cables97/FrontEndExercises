//----------------------------
// DOM Variables
//----------------------------

const domQntyBtnInc = document.getElementById("qnty-plus");
const domQntyBtnDec = document.getElementById("qnty-minus");
const domQntyOutput = document.getElementById("qnty");

const domAddToCartBtn = document.getElementById("add-to-cart");

const domDiscountNotice = document.getElementById("price-discount-notice");
const domPrice = document.getElementById("sale-price");
const domFullPrice = document.getElementById("full-price");

const domProfileBtn = document.getElementById("profile-btn");

const domCartBtn = document.getElementById("cart-btn");
const domCart = document.getElementById("cart");
const domCartContents = document.getElementById("cart-contents");

const domSlideMain = document.getElementById("main-slide");
const domSlide1 = document.getElementById("slide1box");
const domSlide2 = document.getElementById("slide2box");
const domSlide3 = document.getElementById("slide3box");
const domSlide4 = document.getElementById("slide4box");

const domLightboxMain = document.getElementById("lightbox-main");
const domLightboxSlide1 = document.getElementById("lightbox-slide-1");
const domLightboxSlide2 = document.getElementById("lightbox-slide-2");
const domLightboxSlide3 = document.getElementById("lightbox-slide-3");
const domLightboxSlide4 = document.getElementById("lightbox-slide-4");

const domSlideArrowR = document.getElementById("arrow-btn-r");
const domSlideArrowL = document.getElementById("arrow-btn-l");

const domLightboxArrowR = document.getElementById("lightbox-arrow-r");
const domLightboxArrowL = document.getElementById("lightbox-arrow-l");
const domLightboxClose = document.getElementById("lightbox-close-btn");

//----------------------------
// Global Variables
//----------------------------

let quantity = 1;

let cartVisBool = false;
let sideNavBool = false;
let lightboxBool = false;

let activeSlideNum = 1;

let cartContents = [];

//----------------------------
// Event Listeners
//----------------------------

domQntyBtnDec.addEventListener("click", quantityDec);
domQntyBtnInc.addEventListener("click", quantityInc);
domCartBtn.addEventListener("click", cartToggle);
domAddToCartBtn.addEventListener("click", addToCart);

document.getElementById("side-nav-open").addEventListener("click", sideNavWindow);

document.getElementById("side-nav-close").addEventListener("click", sideNavWindow);

//document.getElementById("side-nav").addEventListener("click", sideNavWindow);

domSlide1.addEventListener("click", () => {
  activeSlide(1);
});
domSlide2.addEventListener("click", () => {
  activeSlide(2);
});
domSlide3.addEventListener("click", () => {
  activeSlide(3);
});
domSlide4.addEventListener("click", () => {
  activeSlide(4);
});

domLightboxSlide1.addEventListener("click", () => {
  activeSlide(1);
});
domLightboxSlide2.addEventListener("click", () => {
  activeSlide(2);
});
domLightboxSlide3.addEventListener("click", () => {
  activeSlide(3);
});
domLightboxSlide4.addEventListener("click", () => {
  activeSlide(4);
});

domSlideArrowL.addEventListener("click", () => {
  slideArrows("L");
});
domSlideArrowR.addEventListener("click", () => {
  slideArrows("R");
});

domLightboxArrowL.addEventListener("click", () => {
  slideArrows("L");
});
domLightboxArrowR.addEventListener("click", () => {
  slideArrows("R");
});

domSlideMain.addEventListener("click", lightboxToggle);
domLightboxClose.addEventListener("click", lightboxToggle);

window.addEventListener("resize", () => {
    console.log(window.innerWidth)
    if(window.innerWidth < 900){
        document.getElementById("lightbox").style.display = "none";
        lightboxBool = false;
    }
});
//----------------------------
// onStart
//----------------------------

domQntyOutput.innerHTML = quantity;
setInterval(deleteCartItemListeners, 500);
setInterval(emptyCart, 100);

//----------------------------
// functions
//----------------------------

//allows for the photos to loop
function slideArrows(arrowDirection) {
  if (arrowDirection == "R") {
    if (activeSlideNum <= 3) {
      activeSlideNum++;
    } else if (activeSlideNum == 4) {
      activeSlideNum = 1;
    }
  } else {
    if (activeSlideNum >= 2) {
      activeSlideNum--;
    } else if (activeSlideNum == 1) {
      activeSlideNum = 4;
    }
  }
  activeSlide(activeSlideNum);
}

//takes the slide num, and controls active images
function activeSlide(slideNum) {
  console.log("slidechange");
  switch (slideNum) {
    case 1:
      activeSlideNum = 1;
      domSlide2.classList.remove("active-slide");
      domSlide3.classList.remove("active-slide");
      domSlide4.classList.remove("active-slide");
      domSlide1.classList.add("active-slide");
      domSlideMain.src = "./images/image-product-1.jpg";

      domLightboxSlide2.classList.remove("active-slide");
      domLightboxSlide3.classList.remove("active-slide");
      domLightboxSlide4.classList.remove("active-slide");
      domLightboxSlide1.classList.add("active-slide");

      domLightboxMain.src = "./images/image-product-1.jpg";
      break;

    case 2:
      activeSlideNum = 2;
      domSlideMain.src = "./images/image-product-2.jpg";
      domSlide1.classList.remove("active-slide");
      domSlide3.classList.remove("active-slide");
      domSlide4.classList.remove("active-slide");
      domSlide2.classList.add("active-slide");

      domLightboxSlide1.classList.remove("active-slide");
      domLightboxSlide3.classList.remove("active-slide");
      domLightboxSlide4.classList.remove("active-slide");
      domLightboxSlide2.classList.add("active-slide");

      domLightboxMain.src = "./images/image-product-2.jpg";
      break;

    case 3:
      activeSlideNum = 3;
      domSlideMain.src = "./images/image-product-3.jpg";
      domSlide1.classList.remove("active-slide");
      domSlide2.classList.remove("active-slide");
      domSlide4.classList.remove("active-slide");
      domSlide3.classList.add("active-slide");

      domLightboxSlide2.classList.remove("active-slide");
      domLightboxSlide1.classList.remove("active-slide");
      domLightboxSlide4.classList.remove("active-slide");
      domLightboxSlide3.classList.add("active-slide");

      domLightboxMain.src = "./images/image-product-3.jpg";
      break;

    case 4:
      activeSlideNum = 4;
      domSlideMain.src = "./images/image-product-4.jpg";
      domSlide1.classList.remove("active-slide");
      domSlide2.classList.remove("active-slide");
      domSlide3.classList.remove("active-slide");
      domSlide4.classList.add("active-slide");

      domLightboxSlide2.classList.remove("active-slide");
      domLightboxSlide3.classList.remove("active-slide");
      domLightboxSlide1.classList.remove("active-slide");
      domLightboxSlide4.classList.add("active-slide");

      domLightboxMain.src = "./images/image-product-4.jpg";
      break;
    default:
      break;
  }
}

//opens/closes Lightbox
function lightboxToggle() {
    console.log(window.innerWidth);
    if(window.innerWidth >= 900){
        if (!lightboxBool) {
            document.getElementById("lightbox").style.display = "inherit";
            lightboxBool = true;
            console.log(lightboxBool);
        } else {
            document.getElementById("lightbox").style.display = "none";
            lightboxBool = false;
            console.log(lightboxBool);
        }
    }

}

//Opens/Closes side nav window on click
function sideNavWindow() {
  console.log("attempt");
  if (!sideNavBool) {
    document.getElementById("side-nav").style.display = "inherit";
    document.getElementById("side-nav").style.width = "100%";
    document.getElementById("side-nav-wrapper").style.width = "250px";
    sideNavBool = true;
    console.log(sideNavBool);
  } else {
    document.getElementById("side-nav").style.display = "none";
    document.getElementById("side-nav").style.width = "0px";
    document.getElementById("side-nav-wrapper").style.width = "0px";
    sideNavBool = false;
    console.log(sideNavBool);
  }
}

//adds event listeners to the Cart Item Delete buttons
function deleteCartItemListeners() {
  let cartItemList = document.querySelectorAll(".cart-item-delete");

  cartItemList.forEach((item) => {
    item.addEventListener("click", (event) => {
      //console.log('delete parent');
      item.parentElement.remove();
      //console.log(cartItemList.length);
      if (cartItemList.length == 0) {
        emptyCart();
      }
    });
  });
}

//increase Quantitiy with button press
function quantityInc() {
  if (quantity <= 5) {
    quantity++;
  }

  domQntyOutput.innerHTML = quantity;
}

//decrease Quantity with button press
function quantityDec() {
  if (quantity >= 1) {
    quantity--;
  }
  domQntyOutput.innerHTML = quantity;
}

//add item to cart based on item name and pricing
function addToCart() {
  let itemName = document.getElementById("item-name").innerHTML;
  let itemPrice = 125;
  let itemPic = "./images/image-product-1.jpg";
  let deleteIcon = "./images/icon-delete.svg";

  let cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");

  let cartItemImg = document.createElement("img");
  cartItemImg.classList.add("cart-item-img");
  cartItemImg.src = itemPic;
  cartItem.prepend(cartItemImg);

  let cartItemInfo = document.createElement("div");
  cartItemInfo.classList.add("cart-item-info");

  let cartItemTitle = document.createElement("p");
  cartItemTitle.classList.add("cart-item-title");
  cartItemTitle.innerHTML = itemName;
  cartItemInfo.appendChild(cartItemTitle);

  let cartItemPricing = document.createElement("div");
  cartItemPricing.classList.add("cart-item-pricing");

  let cartItemPricingPer = document.createElement("p");
  cartItemPricingPer.classList.add("cart-item-pricing-per");
  cartItemPricingPer.innerHTML = "$" + formatter.format(itemPrice);
  cartItemPricing.appendChild(cartItemPricingPer);

  let cartItemPricingMulti = document.createElement("p");
  cartItemPricingMulti.innerHTML = "x";
  cartItemPricing.appendChild(cartItemPricingMulti);

  let cartItemPricingQnty = document.createElement("p");
  cartItemPricingQnty.classList.add("cart-item-pricing-qnty");
  cartItemPricingQnty.innerHTML = quantity;
  cartItemPricing.appendChild(cartItemPricingQnty);

  let cartItemPricingTotal = document.createElement("p");
  cartItemPricingTotal.classList.add("cart-item-pricing-total");
  let itemPriceTotal = itemPrice * quantity;
  cartItemPricingTotal.innerHTML = "$" + formatter.format(itemPriceTotal);
  cartItemPricing.appendChild(cartItemPricingTotal);

  cartItemInfo.appendChild(cartItemPricing);
  cartItem.appendChild(cartItemInfo);

  let cartItemDelete = document.createElement("div");
  cartItemDelete.classList.add("cart-item-delete");
  cartItemDelete.classList.add("btn");
  let cartItemDeleteBtn = document.createElement("img");
  cartItemDeleteBtn.src = deleteIcon;
  cartItemDelete.appendChild(cartItemDeleteBtn);
  cartItem.appendChild(cartItemDelete);

  domCartContents.prepend(cartItem);
}

//open/closes cart menu
function cartToggle() {
  const cartcont = document.querySelector(".cart-container");
  if (!cartVisBool) {
    cartcont.style.display = "inherit";
    cartVisBool = true;
  } else {
    cartcont.style.display = "none";
    cartVisBool = false;
  }
}

//controls the item counter for the cart
function updateCartCounter() {
  let cartItemCount = document.querySelectorAll(".cart-item-pricing-qnty");
  //console.log(cartItemCount.length);
  let cartQnty = 0;

  cartItemCount.forEach((item) => {
    let itemQnty = parseFloat(item.innerHTML);
    cartQnty = cartQnty + itemQnty;
    //console.log(cartQnty);
  });

  document.getElementById("cart-count").innerHTML = cartQnty;
}

//determines if there is an empty cart
function emptyCart() {
  let cartItemList = document.querySelectorAll(".cart-item");
  //console.log(cartItemList.length);
  //console.log("emptyCart");
  if (cartItemList.length == 0) {
    // console.log("emptyCart");
    document.getElementById("checkout-btn").style.display = "none";
    document.getElementById("empty-cart").style.display = "flex";
  } else {
    //console.log("fullCart");
    document.getElementById("checkout-btn").style.display = "inherit";
    document.getElementById("empty-cart").style.display = "none";
  }
  updateCartCounter();
}

//Basic pricing formatter
const formatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
